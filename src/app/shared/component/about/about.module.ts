import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AboutComponent } from "./about.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../../shared.module";

@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [AboutComponent],
})
export class AboutModule {}
