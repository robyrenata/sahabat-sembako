import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ShipmentComponent } from "./shipment.component";
import { SharedModule } from "../../shared.module";

@NgModule({
  declarations: [ShipmentComponent],
  imports: [CommonModule, SharedModule],
  exports: [ShipmentComponent],
})
export class ShipmentModule {}
