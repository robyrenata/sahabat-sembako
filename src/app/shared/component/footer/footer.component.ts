import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { GlobalService } from "../../services/global.service";
import { RxwebValidators } from "@rxweb/reactive-form-validators";
import { ApiService } from "../../services/core/api.service";
import { environment } from "src/environments/environment";
import { TranslateService } from "../../pipes/translate/translate.service";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  fg: FormGroup;
  submitted = false;
  onSubmit = false;
  constructor(
    private fb: FormBuilder,
    private gs: GlobalService,
    private api: ApiService,
    private translateSrv: TranslateService
  ) {
    this.initFormEmail();
  }

  ngOnInit() {}

  initFormEmail() {
    this.gs.validatorErrorMessage();
    this.fg = this.fb.group({
      name: [
        null,
        RxwebValidators.compose({
          validators: [
            RxwebValidators.required(),
            RxwebValidators.pattern({
              expression: { alphanumSpace: /^[a-zA-Z0-9\-\s]+$/ },
              message: this.translateSrv.get("FORM_ALPHANUM_ERR"),
            }),
            RxwebValidators.minLength({
              value: 3,
              message: `${this.translateSrv.get("FORM_MIN_ERR")}3`,
            }),
            RxwebValidators.maxLength({
              value: 24,
              message: `${this.translateSrv.get("FORM_MAX_ERR")}24`,
            }),
          ],
        }),
      ],
      email: [
        null,
        RxwebValidators.compose({
          validators: [RxwebValidators.required(), RxwebValidators.email()],
        }),
      ],
      phone_number: [
        null,
        RxwebValidators.compose({
          validators: [
            RxwebValidators.minLength({
              value: 9,
              message: `${this.translateSrv.get("FORM_MIN_ERR")}9`,
            }),
            RxwebValidators.maxLength({
              value: 13,
              message: `${this.translateSrv.get("FORM_MAX_ERR")}13`,
            }),
            RxwebValidators.numeric(),
          ],
        }),
      ],
      message: [
        null,
        RxwebValidators.compose({
          validators: [
            RxwebValidators.required(),
            RxwebValidators.minLength({
              value: 12,
              message: `${this.translateSrv.get("FORM_MIN_ERR")}12`,
            }),
            RxwebValidators.maxLength({
              value: 120,
              message: `${this.translateSrv.get("FORM_MIN_ERR")}120`,
            }),
          ],
        }),
      ],
    });
  }

  sendEmail() {
    this.gs.log("value?", this.fg.controls);
    this.submitted = true;
    this.onSubmit = true;
    if (this.fg.invalid) {
      this.onSubmit = false;
      return;
    } else {
      this.api.postData(environment.url_formspree, this.fg.value).subscribe(
        (res) => {
          this.gs.log("res?", res);
          if (res.ok) {
            window.open("https://formspree.io" + res.next, "_BLANK");
            this.onSubmit = false;
            this.submitted = false;
            this.fg.reset();
          } else {
            this.onSubmit = false;
            this.submitted = false;
            this.fg.reset();
          }
        },
        (err) => {
          this.onSubmit = false;
          this.submitted = false;
          this.fg.reset();
        }
      );
    }
  }
}
