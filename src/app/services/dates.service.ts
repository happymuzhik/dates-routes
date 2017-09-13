import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/Observable/timer';
import 'rxjs/add/operator/map';

export class AppDate {
  constructor(public year: number, public month: number) {}
}

const DATES = [
  { year: '2017', month: '1' },
  { year: '2017', month: '2' },
  { year: '2017', month: '3' }
];

@Injectable()
export class DatesService {

  constructor() { }

  getAllDates(){
    return Observable.timer(2000)
      .map( () => DATES.map( date => new AppDate(+date.year, +date.month)));
  }

}
