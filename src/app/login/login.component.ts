import { Component, OnInit } from "@angular/core";
import { Route, Router } from "@angular/router";
import { RestapiService } from "../restapi.service";
import { UserdetailsService } from "../userdetails.service";
import { Userresponse } from "../userresponse.model";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  errMessage: string;
  userRecord: any;

  constructor(private service:RestapiService,private restService:RestapiService, private router: Router) {}

  ngOnInit() {
    
  }

getUsername():string{
  return this.username;
}

getPassword(){
  return this.password;
}

 

  doLogin() {
    let resp = this.service.login(this.username, this.password);
      resp.subscribe(
      (data) => {
        this.userRecord = data;
        this.username = "";
        this.password = "";
        let role: [string] = data["role"];
        if (role.includes("ROLE_USER")) {
          this.router.navigate(["/user"]);
          
        } else if (role.includes("ROLE_ADMIN")) {
          this.router.navigate(["/admin"]);
        } else if (role.includes("ROLE_ENGG")) {
          this.router.navigate(["/engg"]);
        } else if (role.includes("ROLE_MANAGER")) {
          this.router.navigate(["/manager"]);
        }
      },
      (error) => {
        this.errMessage = "Username or Password invalid";
      }
    );
 
  }
  
 
}
