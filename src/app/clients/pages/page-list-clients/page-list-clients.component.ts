import {Component, OnInit} from '@angular/core';
import {ClientsService} from "../../services/clients.service";
import {Observable} from "rxjs";

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
    // console.log('page html initialisé');
    this.clientsService.getAllprenoms().subscribe({
      next: (prenoms: string[]) => {
        console.log(prenoms)
      }
    })



    const monObservable = new Observable(subcriber => {
        subcriber.next('Bonjour Dame');
        subcriber.next('Bonjour Virginie');
        subcriber.next('Bonjour Sukjin');
        subcriber.complete();
        subcriber.next('Bonjour Lucia');
      //   subcriber.error();
      // subcriber.complete();
    })

    monObservable.subscribe({
      next: value => {
        console.log(value);
      }
    })

  }


}
