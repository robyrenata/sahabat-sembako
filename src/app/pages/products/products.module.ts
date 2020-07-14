import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductsComponent } from "./products.component";
import { Routes, RouterModule } from "@angular/router";
import { CardProductModule } from "src/app/shared/component/card-product/card-product.module";
import { FooterModule } from "src/app/shared/component/footer/footer.module";
import { SharedModule } from "src/app/shared/shared.module";
import { ModalModule } from "ngx-bootstrap/modal";

const routes: Routes = [
  {
    path: "",
    component: ProductsComponent,
  },
];

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CardProductModule,
    FooterModule,
    SharedModule,
    ModalModule.forRoot(),
  ],
})
export class ProductsModule {}
