import { Component, OnInit } from "@angular/core";
import dataProduct from "./../../../assets/data/product-list.json";
import dataShipping from "./../../../assets/data/shipping-list.json";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  productList = dataProduct;
  shippingList = dataShipping;
  constructor() {
    console.log("data", this.shippingList);
  }

  ngOnInit() {}
}
