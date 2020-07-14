import { Injectable, isDevMode } from "@angular/core";
import * as _ from "lodash";
import { FormGroup } from "@angular/forms";
import { ReactiveFormConfig } from "@rxweb/reactive-form-validators";
import { TranslateService } from "../pipes/translate/translate.service";

@Injectable({
  providedIn: "root",
})
export class GlobalService {
  constructor(private translateSrv: TranslateService) {}

  log(message: string, data: any = null, type: string = "log") {
    if (isDevMode()) {
      if (type === "log") {
        if (data) {
          console.log(message, data);
        } else {
          console.log(message);
        }
      } else if (type === "error") {
        console.error(message, data);
      }
    }
  }

  getDirtyValues(formGroup: FormGroup) {
    const dirtyValues = {};
    Object.keys(formGroup.controls).forEach((control) => {
      const currentControl = formGroup.get(control);
      if (currentControl.dirty) {
        dirtyValues[control] = currentControl.value;
      }
    });
    return dirtyValues;
  }

  validatorErrorMessage() {
    return ReactiveFormConfig.set({
      validationMessage: {
        required: this.translateSrv.get("FORM_REQUIRED_ERR"),
        alpha: this.translateSrv.get("FORM_ALPHA_ERR"),
        alphaNumeric: this.translateSrv.get("FORM_ALPHANUM_ERR"),
        numeric: this.translateSrv.get("FORM_NUM_ERR"),
        url: this.translateSrv.get("FORM_URL_ERR"),
        email: this.translateSrv.get("FORM_EMAIL_ERR"),
        phonenumber: this.translateSrv.get("FORM_PHONE_ERR"),
      },
    });
  }
}
