import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AuctionSettings} from "./AuctionSettings";
import {Broker} from "./Broker";
import {Share} from "./Share";
import {Observable} from "rxjs";

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {
  }
  getBrokers(handler) {
    this.http.post('/api/brokers', {}).subscribe(handler, err => console.log('Error:', err));
  }

  setBrokers(brokers: Broker[]) {
    this.http.put('/api/brokers', brokers).subscribe(x => {});
  }

  getShares(handler) {
    this.http.post('/api/shares', {}).subscribe(handler, err => console.log('Error:', err));
  }

  setShares(shares: Share[]) {
    this.http.put('/api/shares', shares).subscribe(x => {});
  }

  getAuctionSettings(handler) {
    this.http.post('/api/auctionSettings', {}).subscribe(handler, err => console.log('Error:', err));
  }

  setAuctionSettings(auctionSettings: AuctionSettings) {
    this.http.put('/api/auctionSettings', auctionSettings).subscribe(x => {});
  }
}
