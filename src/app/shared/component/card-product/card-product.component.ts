import { Component, OnInit, Input, TemplateRef } from "@angular/core";
import { environment } from "src/environments/environment";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";

@Component({
  selector: "app-card-product",
  templateUrl: "./card-product.component.html",
  styleUrls: ["./card-product.component.scss"],
})
export class CardProductComponent implements OnInit {
  @Input() product: any;
  modalRef: BsModalRef;
  descData: any = null;
  constructor(private modalSrv: BsModalService) {}

  ngOnInit() {}

  redirectPath(path) {
    // window.open(environment.url_tokped + sanitized, "_BLANK");
    let url = "";
    switch (path) {
      case "tokopedia":
        url = environment.url_tokopedia;
        break;
      case "bukalapak":
        url = environment.url_bukalapak;
        break;
      case "blibli":
        url = environment.url_blibli;
        break;
    }
    this.modalRef.hide();
    window.open(url, "_BLANK");
  }

  openModalDetail(template: TemplateRef<any>, data) {
    this.descData = data;
    this.modalRef = this.modalSrv.show(template, {
      animated: true,
      keyboard: true,
      class: "modal-md",
    });
  }

  openModalRedirect(template: TemplateRef<any>) {
    this.modalRef = this.modalSrv.show(template, {
      animated: true,
      keyboard: true,
      class: "modal-lg",
    });
  }
}
