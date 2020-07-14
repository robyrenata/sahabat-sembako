import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TranslateService } from "../../pipes/translate/translate.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  selectedLang = "id";
  constructor(private router: Router, private translateSrv: TranslateService) {}

  ngOnInit() {}

  setLang(lang) {
    this.selectedLang = lang;
    this.translateSrv.setLanguage(lang);
  }
}
