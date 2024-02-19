import { Component } from '@angular/core';
import {StateClient} from "./core/enums/state-client";
import {Client} from "./core/models/clients";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CRMPRO2024Bordeaux';
  state:StateClient = StateClient.ACTIVE;
}
