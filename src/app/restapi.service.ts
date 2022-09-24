import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";



const BaseUrl = "http://sspringboot-crs-app:8080";
// const BaseUrl = "http://localhost:8000";



@Injectable({
  providedIn: "root",
})
export class RestapiService {
  public username: string;
  public password: string;
  data:[];

  constructor(private http: HttpClient) {
   
  }



  login(username: string, password: string) {
    let postData = { username: username, password: password };
    return this.http.post<any>(BaseUrl + "/test/login",postData)
                .pipe(
                  map(user =>{
                    if(user){
                      user.authdata=window.btoa(username+":"+password);
                      sessionStorage.setItem("currentUser",JSON.stringify(user));
                    }
                    return user;
                  })
                )

  }

 

  signup(username: string, password: string) {
    let postData = { username: username, password: password };
    return this.http.post(BaseUrl + "/test/signup", postData);
  }

  getComplain() {
    return this.http.get(BaseUrl + "/user/get-complains");
  }

  setComplain(complain: string) {
    let postData = { complain: complain };
    return this.http.post(
      BaseUrl + "/user/add-complain",
      postData,

    );
  }

  viewComplainToEngg() {
    return this.http.get(BaseUrl + "/engg/view-complains");
  }

  updateComplaiToEngg(cid: number, compStatus: string) {
    let postData = { status: compStatus };
    return this.http.put(
      BaseUrl + "/engg/update-status/" + cid,
      postData
    );
  }

  viewComplainToManager() {
    return this.http.get(BaseUrl + "/manager/view-all-complain");
  }

  viewEngg() {
    return this.http.get(BaseUrl + "/manager/get-all-engg");
  }

  assignEngg(cid: number, eid: number) {
    let postData = { assignEnggId: eid };
    return this.http.put(
      BaseUrl + "/manager/assign-engg/" + cid,
      postData
    );
  }

  adminRegister(username:string,password:string,role:string){
    let postData = { username: username ,password:password,role:role};
    return this.http.post(BaseUrl+"/admin/add-user",postData);
  }

  getComplainByAdmin(){
    return this.http.get(BaseUrl+"/admin/get-complains")
  }

}
