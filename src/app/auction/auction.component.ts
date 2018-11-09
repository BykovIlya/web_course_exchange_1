import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.less'],
})
export class AuctionComponent implements OnInit {
  page = {
    title: 'Аукцион',
    subtitle: 'тут будет аукцион в шестой лабе',
    image: 'assets/bg01.jpg'
  };
  constructor() { }

  ngOnInit() {
  }

}
