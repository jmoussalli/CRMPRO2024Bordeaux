import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageListClientsComponent} from "./clients/pages/page-list-clients/page-list-clients.component";

const routes: Routes = [
  {path:'', component: PageListClientsComponent},
  {path:'a', component: PageListClientsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
