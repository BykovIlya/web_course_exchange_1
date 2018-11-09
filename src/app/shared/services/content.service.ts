import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  pages: Object = {
    'home': {title: 'Лабораторная работа № 5', subtitle: 'Выполнил: Быков И.В. 6383 гр.', content: 'Биржа акций. Angular', image: 'assets/bg.jpg'}
  };
  constructor() { }
}
