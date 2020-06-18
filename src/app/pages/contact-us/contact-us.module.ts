import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContactUsComponent } from "./contact-us.component";
import { Routes, RouterModule } from "@angular/router";
import { ContactModule } from "src/app/shared/component/contact/contact.module";
import { FooterModule } from "src/app/shared/component/footer/footer.module";

const routes: Routes = [
  {
    path: "",
    component: ContactUsComponent,
  },
];

@NgModule({
  declarations: [ContactUsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ContactModule,
    FooterModule,
  ],
})
export class ContactUsModule {}
