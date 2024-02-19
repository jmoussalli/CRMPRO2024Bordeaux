import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageListClientsComponent} from "./clients/pages/page-list-clients/page-list-clients.component";
import {PageAddClientsComponent} from "./clients/pages/page-add-clients/page-add-clients.component";
import {PageEditClientsComponent} from "./clients/pages/page-edit-clients/page-edit-clients.component";

const routes: Routes = [
  {path:'', component: PageListClientsComponent},
  {path:'add', component: PageAddClientsComponent},
  {path:'edit', component: PageEditClientsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
