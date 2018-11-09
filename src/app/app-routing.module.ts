import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from './page/page.component';
import {AuctionComponent} from "./auction/auction.component";
import {BrokersComponent} from "./brokers/brokers.component";
import {SharesComponent} from "./shares/shares.component";
import {AuctionSettingsComponent} from "./auction-settings/auction-settings.component";

/*const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: PageComponent, data: {
      page: 'home'
    }},
  {path: 'auction', component: PageComponent, data: {
      page: 'auction'
    }},
  {path: 'brokers', component: PageComponent, data: {
      page: 'brokers'
    }},
  {path: 'shares', component: PageComponent, data: {
      page: 'shares'
    }},
  {path: 'auctionSettings', component: PageComponent, data: {
      page: 'auctionSettings'
    }},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];*/

const AppRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: "home", component: PageComponent},
  {path:"auction", component: AuctionComponent},
  {path:"brokers", component: BrokersComponent},
  {path:"shares", component: SharesComponent},
  {path:"auctionSettings", component: AuctionSettingsComponent},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
