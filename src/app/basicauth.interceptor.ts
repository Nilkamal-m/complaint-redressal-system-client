import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BasicauthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    let user = JSON.parse(sessionStorage.getItem('currentUser'));

    if(user && user.authdata){
      req=req.clone({
  setHeaders:{
    "Content-Type": "application/json",
    Authorization: `Basic ${user.authdata}`
  }
})
    }

    return next.handle(req);
  }
}
