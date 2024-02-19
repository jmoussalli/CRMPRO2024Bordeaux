import {Component, OnInit} from '@angular/core';
import {ClientsService} from "../../services/clients.service";

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrl: './page-list-clients.component.css'
})
export class PageListClientsComponent implements OnInit {
  tabPrenoms: string[]= [];
  constructor(private clientsService: ClientsService) {
  }
  ngOnInit() {
    console.log('page html initialisé');
    this.tabPrenoms = this.clientsService.getAllprenoms();
    console.log(this.tabPrenoms);
  }


}
