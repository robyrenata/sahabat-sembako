import { Component, OnInit, Input } from "@angular/core";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-card-product",
  templateUrl: "./card-product.component.html",
  styleUrls: ["./card-product.component.scss"],
})
export class CardProductComponent implements OnInit {
  @Input() product: any;
  constructor() {}

  ngOnInit() {
    console.log("prod input", this.product);
  }

  redirectToTokped(path) {
    const sanitized = path.replace(/\s+/g, "-").toLowerCase();
    window.open(environment.url_tokped + sanitized, "_BLANK");
  }
}
