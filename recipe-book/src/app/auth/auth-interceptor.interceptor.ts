import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth-service';
import { exhaustMap, take } from 'rxjs/operators';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor(private authService : AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler) {

   return  this.authService.userSubject.pipe(take(1), exhaustMap(userData => {
      const clonedRequest = request.clone({params: new HttpParams().set('auth', userData.token)})
      return next.handle(clonedRequest);
    }));

  }
}
