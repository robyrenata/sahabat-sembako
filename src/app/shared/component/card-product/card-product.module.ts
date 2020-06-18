import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardProductComponent } from "./card-product.component";
import { ModalModule } from "ngx-bootstrap/modal";

@NgModule({
  declarations: [CardProductComponent],
  imports: [CommonModule, ModalModule.forRoot()],
  exports: [CardProductComponent],
})
export class CardProductModule {}
