import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { RestapiService } from "../restapi.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  username: string;
  password: string;
  errMessage: string;

  constructor(private service: RestapiService, private router: Router) {}

  ngOnInit(): void {}

  doLogin() {
    this.service.signup(this.username, this.password).subscribe(
      (data) => {
        console.log(data);
        this.username = "";
        this.password = "";
        this.router.navigate(["/login"]);
      },
      (error) => {
        this.errMessage = "Enter unique Username";
      }
    );
  }
}
