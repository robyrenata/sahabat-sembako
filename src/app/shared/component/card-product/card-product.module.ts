import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardProductComponent } from "./card-product.component";
import { ModalModule } from "ngx-bootstrap/modal";
import { SharedModule } from "../../shared.module";

@NgModule({
  declarations: [CardProductComponent],
  imports: [CommonModule, ModalModule.forRoot(), SharedModule],
  exports: [CardProductComponent],
})
export class CardProductModule {}
