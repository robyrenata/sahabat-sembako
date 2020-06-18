import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FooterComponent } from "./footer.component";
import { ContactModule } from "../contact/contact.module";

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, ContactModule],
  exports: [FooterComponent],
})
export class FooterModule {}
