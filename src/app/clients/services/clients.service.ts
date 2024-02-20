import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Client} from "../../core/models/clients";
import {Observable} from "rxjs";
import {BASE_URL} from "../../core/config/config";

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private apiURL = 'http://localhost:8080/api/clients';
  constructor(private http: HttpClient) { }

  getAllClients(): Observable<Client[]> {
    return this.http.get<any[]>(this.apiURL);
  }

  getAllprenoms(): Promise<string[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(['Clara', 'Sixtine', 'Lisbeth']);
      }, 3000);
    });
  }
}
