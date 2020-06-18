import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AboutUsComponent } from "./about-us.component";
import { Routes, RouterModule } from "@angular/router";
import { AboutModule } from "src/app/shared/component/about/about.module";
import { FooterModule } from "src/app/shared/component/footer/footer.module";

const routes: Routes = [
  {
    path: "",
    component: AboutUsComponent,
  },
];

@NgModule({
  declarations: [AboutUsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AboutModule,
    FooterModule,
  ],
})
export class AboutUsModule {}
