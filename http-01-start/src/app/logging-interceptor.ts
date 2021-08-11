import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(tap(event => {
      if(event.type === HttpEventType.Response) {
        console.log("Response : ")
        console.log(event.body);
      }
      if(event.type === HttpEventType.Sent) {
        console.log("Request sent to " + request.url);
      }
    }));
  }
}
