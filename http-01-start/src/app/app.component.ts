import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';
import { PostServiceComponent } from './post-service/post-service.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching: boolean = false;
  error = null;

  constructor(private http: HttpClient, private httpService: PostServiceComponent) { }

  ngOnInit() {
    this.onFetchPosts();
  }

  onCreatePost(postData: Post) {
    this.httpService.sendData(postData);
  }

  onFetchPosts() {
    this.isFetching = true;
    this.httpService.getPosts().subscribe(post => {
      this.loadedPosts = post;
      this.isFetching = false;
    }, error => {
      this.error = error.message;
      this.isFetching = false;
    });
  }

  onHandleError() {
    this.error = null;
  }

  onClearPosts() {
    this.httpService.deleteAll().subscribe(
      response => { 
        this.loadedPosts = [] 
      }
    );
  }
}
