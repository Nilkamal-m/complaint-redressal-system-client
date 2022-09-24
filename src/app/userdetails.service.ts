import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BaseUrl = "http://localhost:8000";

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService implements HttpInterceptor{

  constructor(private http: HttpClient) { }
  


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('requent Basic',req)
    console.log('httpHamdler ',next)
    let user = JSON.parse(localStorage.getItem('currentUser'));

    if(user && user.authdata){
req=req.clone({
  setHeaders:{
    "Content-Type": "application/json",
    Authorization: `Basic ${user['authdata']}`
  }
})
    }

    return next.handle(req);
  }


  login(username: string, password: string) {
    let postData = { username: username, password: password };
    return this.http.post(BaseUrl + "/login", postData);
  }
}
