import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { RestapiService } from "../restapi.service";

declare var window: any;

@Component({
  selector: "app-manager",
  templateUrl: "./manager.component.html",
  styleUrls: ["./manager.component.css"],
})
export class ManagerComponent implements OnInit {
  formModal: any;
  complainList: [];
  selector: object = null;
  enggList: [];
  cid: number;
  eid: number;

  constructor(private service: RestapiService, private router: Router) {}

  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById("exampleModal")
    );
    this.service.viewComplainToManager().subscribe((res: []) => {
      this.complainList = res;
    });
  }

  openModal(cid: number) {
    this.formModal.show();
    this.cid = cid;
    this.service.viewEngg().subscribe((res: []) => {
      this.enggList = res;
      console.log(res);
    });
  }

  hideModal() {
    this.formModal.hide();
  }

  showComplain() {
    this.service.viewComplainToManager().subscribe((res: []) => {
      this.complainList = res;
    });
  }

  updateEngg() {
    this.eid = this.selector["id"];
    this.service.assignEngg(this.cid, this.eid).subscribe((res) => {
      this.showComplain();
      this.hideModal();
    });
    console.log(this.eid);
  }
}
