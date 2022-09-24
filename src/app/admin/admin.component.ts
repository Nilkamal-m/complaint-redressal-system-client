import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../restapi.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  username:string;
  password:string;
  selector:string;
  complainList:[];
  msg:string;
  cssClass:string;

  constructor(private service:RestapiService) { }

  ngOnInit(): void {
    this.service.getComplainByAdmin().subscribe((res:[])=>{
      this.complainList=res;
          })
  }

  doSubmit(){
    this.service.adminRegister(this.username,this.password,this.selector).subscribe(res=>{
      this.password="";
      this.username="";
      this.selector="";
      this.msg="User register successfully";
      this.cssClass="alert-success"
    },error=>{
      this.msg="Enter unique Username";
      this.cssClass="alert-danger"
    })
  }

  showComplain(){
    this.service.getComplainByAdmin().subscribe((res:[])=>{
this.complainList=res;
    })
  }

}
