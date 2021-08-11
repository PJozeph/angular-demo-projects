import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Post } from '../post.model';

@Injectable({ providedIn: 'root' })
export class PostServiceComponent {

  constructor(private httpClient: HttpClient) { }

  sendData(postData: Post) {
    this.httpClient.post<{ name: string }>(
      'https://angular-demo-8a63e-default-rtdb.europe-west1.firebasedatabase.app/posts.json', postData, 
      {observe : 'response'})
      .subscribe();
  }

  getPosts(): Observable<Post[]> {
    return this.httpClient.get<{ [key: string]: Post }>
      ('https://angular-demo-8a63e-default-rtdb.europe-west1.firebasedatabase.app/posts.json',{
        headers : new HttpHeaders({
          "Custom-header" : "hello-header"
        })
      })
      .pipe(
        map(response => {
        const result: Post[] = [];
        for (const key in response) {
          result.push({ ...response[key], id: key })
        }
        return result;
      }, catchError(error => {
        // send data somewhere
        return throwError(error);
      })));
  }

  deleteAll(){
    return this.httpClient
    .delete('https://angular-demo-8a63e-default-rtdb.europe-west1.firebasedatabase.app/posts.json');
  }

}
