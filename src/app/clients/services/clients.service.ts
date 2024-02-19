import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Client} from "../../core/models/clients";

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient) { }
  getAllCLients(): Observable<Client[]> {
    return this.http.get<Client[]>('http://localhost:3000/clients');
  }
  getAllprenoms(): any{
    return setTimeout(() => {
    return ['veronica', 'gabriel', 'sixtine'];
    },3000)

  }
}
