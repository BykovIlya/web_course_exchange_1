import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatNativeDateModule,
  MatToolbarModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
//import { ContentService } from './shared/services/content.service';
import { FullpageDirective } from './shared/directives/fullpage.directive';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AuctionComponent } from './auction/auction.component';
import { SharesComponent, DialogAddShare, DialogEditShare, DialogDeleteShare  } from './shares/shares.component';
import { BrokersComponent, DialogAddBroker, DialogEditBroker, DialogDeleteBroker } from './brokers/brokers.component';
import { AuctionSettingsComponent, DialogEditAuctionSettings } from './auction-settings/auction-settings.component';
//import {RouterModule, Routes} from "@angular/router";
import {DataService} from "./data.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    FullpageDirective,
    AuctionComponent,
    SharesComponent,
    BrokersComponent,
    AuctionSettingsComponent,
    DialogAddBroker,
    DialogEditBroker,
    DialogDeleteBroker,
    DialogAddShare,
    DialogEditShare,
    DialogDeleteShare,
    DialogEditAuctionSettings
  ],
  entryComponents: [
    DialogAddBroker,
    DialogEditBroker,
    DialogDeleteBroker,
    DialogAddShare,
    DialogEditShare,
    DialogDeleteShare,
    DialogEditAuctionSettings
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatDialogModule,
  //  RouterModule.forRoot(AppRoutes)
  ],
  //providers: [ContentService],
  providers:[DataService],
  bootstrap: [AppComponent]
})

export class AppModule {
}

