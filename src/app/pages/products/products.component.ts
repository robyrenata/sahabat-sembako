import { Component, OnInit } from "@angular/core";
import dataProduct from "./../../../assets/data/product-list.json";
import { environment } from "src/environments/environment";
@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnInit {
  productList = dataProduct;
  constructor() {}

  ngOnInit() {}

  goToTokped() {
    window.open(environment.url_tokped, "_BLANK");
  }
}
