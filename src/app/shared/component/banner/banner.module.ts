import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BannerComponent } from "./banner.component";
import { SharedModule } from "../../shared.module";

@NgModule({
  declarations: [BannerComponent],
  imports: [CommonModule, SharedModule],
  exports: [BannerComponent],
})
export class BannerModule {}
