import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { Routes, RouterModule } from "@angular/router";
import { HeaderModule } from "src/app/shared/component/header/header.module";
import { BannerModule } from "src/app/shared/component/banner/banner.module";
import { AboutModule } from "src/app/shared/component/about/about.module";
import { CardProductModule } from "src/app/shared/component/card-product/card-product.module";
import { ShipmentModule } from "src/app/shared/component/shipment/shipment.module";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HeaderModule,
    BannerModule,
    AboutModule,
    CardProductModule,
    ShipmentModule,
  ],
})
export class HomeModule {}
