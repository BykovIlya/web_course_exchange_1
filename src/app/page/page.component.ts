import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.less']
})
export class PageComponent implements OnInit {
  page = {
    title: 'Лабораторная работа № 5',
    subtitle: 'Выполнил: Быков И.В. 6383 гр.',
    content: 'Биржа акций. Angular',
    image: 'assets/bg.jpg'
  };

  constructor() { }
  ngOnInit() { }
}
