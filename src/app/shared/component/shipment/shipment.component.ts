import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-shipment",
  templateUrl: "./shipment.component.html",
  styleUrls: ["./shipment.component.scss"],
})
export class ShipmentComponent implements OnInit {
  @Input() shipping: any;
  constructor() {}

  ngOnInit() {}
}
