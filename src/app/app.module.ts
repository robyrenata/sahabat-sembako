import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderModule } from "./shared/component/header/header.module";
import { FooterModule } from "./shared/component/footer/footer.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { TranslateService } from "./shared/pipes/translate/translate.service";
import { registerLocaleData } from "@angular/common";
import localeId from "@angular/common/locales/id";
import { SharedModule } from "./shared/shared.module";

registerLocaleData(localeId, "id");

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      deps: [TranslateService],
      useFactory: (translateService: any) => translateService.lang,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
