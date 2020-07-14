import { Component, OnInit, TemplateRef } from "@angular/core";
import dataProduct from "./../../../assets/data/product-list.json";
import { environment } from "src/environments/environment";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnInit {
  productList = dataProduct;
  modalRef: BsModalRef;
  constructor(private modalSrv: BsModalService) {}

  ngOnInit() {}

  openModalRedirect(template: TemplateRef<any>) {
    this.modalRef = this.modalSrv.show(template, {
      animated: true,
      keyboard: true,
      class: "modal-lg",
    });
  }

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
}
