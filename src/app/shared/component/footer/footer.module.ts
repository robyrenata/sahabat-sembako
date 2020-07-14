import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FooterComponent } from "./footer.component";
import { ContactModule } from "../contact/contact.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../../shared.module";

@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    ContactModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [FooterComponent],
})
export class FooterModule {}
