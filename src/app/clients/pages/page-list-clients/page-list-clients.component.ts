import {Component, OnInit} from '@angular/core';
import {ClientsService} from "../../services/clients.service";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.css']
})
export class PageListClientsComponent implements OnInit {
  clients: any[] = [];
  headers: string[] = [
    'id',
    'companyName',
    'firstName',
    'lastName',
    'email',
    'phone',
    'address',
    'zipCode',
    'city',
    'country',
    'state',
  ];
  constructor(private clientService: ClientsService) {
  }

  ngOnInit(): void {
    this.clientService.getAllClients().subscribe(data => {
      this.clients = data;
    });

    const monObservable = new Observable(subscriber => {
      subscriber.next('Bonjour madame !');
      setTimeout(()=> {
        subscriber.next('Bonjour Virginie !');
      }, 3000);
      subscriber.next('Bonjour Sukjin !');
      subscriber.complete();
      // subscriber.error('Aîe ! Une error !');
      subscriber.next('Bonjour Lucia !');
      // subscriber.complete();
    })

    monObservable.subscribe({
        next: value => {
          console.log(value);
        }
      }
    )

  }

}
