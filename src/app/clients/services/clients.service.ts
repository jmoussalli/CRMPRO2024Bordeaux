import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Client} from "../../core/models/clients";

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient) { }
  getAllCLients(): Observable<Client[]> {
    return this.http.get<Client[]>('http://localhost:3000/clients');
  }
  getAllprenoms(): Observable<string[]>{
    return of(['veronica', 'gabriel', 'sixtine']);
  }
}
