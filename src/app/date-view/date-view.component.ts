import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-date-view',
  templateUrl: './date-view.component.html',
  styleUrls: ['./date-view.component.css']
})
export class DateViewComponent implements OnInit {

  year: string;
  month: string;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {

    this.route.paramMap
      .subscribe( params => {
        this.year = params.get('year');
        this.month = params.get('month');
      });

  }

  viewAll() {
    this.router.navigate(['/']);
  }

}
