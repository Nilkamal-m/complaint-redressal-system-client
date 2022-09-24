import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { RestapiService } from "../restapi.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit {
  complain: string;
  complainList: [];
  constructor(private router: Router, private service: RestapiService) {}

  ngOnInit(): void {
    this.service.getComplain().subscribe((res: []) => {
      this.complainList = res;
    });
  
  }
  doSubmit() {
    this.service.setComplain(this.complain).subscribe(
      (res) => {
        console.log(res["status"]);
        this.service.getComplain().subscribe((res: []) => {
          this.complainList = res;
          console.log(this.complainList);
        });
      },
      (error) => {
        console.log(error);
      }
    );
    this.complain = "";
  }


}
