import { Component, OnInit } from "@angular/core";
import { tick } from "@angular/core/testing";
import { Router } from "@angular/router";
import { RestapiService } from "../restapi.service";

declare var window: any;

@Component({
  selector: "app-engg",
  templateUrl: "./engg.component.html",
  styleUrls: ["./engg.component.css"],
})
export class EnggComponent implements OnInit {
  formModal: any;
  cid: number;

  selector: string;
  complainList: [];

  constructor(private service: RestapiService, private router: Router) {}

  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById("exampleModal")
    );
  }

  openModal(cid: number) {
    this.cid = cid;
    this.formModal.show();
  }

  hideModal() {
    this.formModal.hide();
  }

  onClickShowComplain() {
    this.service.viewComplainToEngg().subscribe((res: []) => {
      this.complainList = res;
    });
  }

  updateStatus() {
    this.service.updateComplaiToEngg(this.cid, this.selector).subscribe(() => {
      this.onClickShowComplain();
    });
    this.selector = "";
    this.hideModal();
  }
}
