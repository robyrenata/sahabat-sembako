import { Component } from "@angular/core";
import { routerAnimation } from "src/assets/animations/router-animations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [routerAnimation],
})
export class AppComponent {
  title = "sahabatsembako";
}
