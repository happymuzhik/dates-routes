import { DatesService, AppDate } from './../services/dates.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dates-list',
  templateUrl: './dates-list.component.html',
  styleUrls: ['./dates-list.component.css']
})
export class DatesListComponent implements OnInit {

  private dateList: AppDate[];

  constructor(private datesService: DatesService) { }

  ngOnInit() {
    this.datesService.getAllDates()
      .subscribe( dates => this.dateList = dates );
  }

}
