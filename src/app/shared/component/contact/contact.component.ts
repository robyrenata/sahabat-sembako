import { Component, OnInit } from "@angular/core";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  openWhatsapp() {
    window.open("https://wa.me/" + environment.store_phone, "_BLANK");
  }
}
