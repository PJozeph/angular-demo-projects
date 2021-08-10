import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) { }

  ngOnInit() { 
    this.onFetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    console.log(postData);
    this.http.post(
        'https://angular-demo-8a63e-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
         postData).subscribe(response => console.log(response));
  }

  onFetchPosts() {
    // Send Http request
    this.http.get('https://angular-demo-8a63e-default-rtdb.europe-west1.firebasedatabase.app/posts.json')
    .pipe(map( response => {
        const result = [];
        for (const key in response) {
          result.push({...response[key], id: key})
        }
        return result;
    }))


    .subscribe((response) => {
        console.log(response)
    })
  }

  onClearPosts() {
    // Send Http request
  }
}
