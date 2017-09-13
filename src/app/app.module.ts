import { DatesService } from './services/dates.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DatesListComponent } from './dates-list/dates-list.component';
import { DateViewComponent } from './date-view/date-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    DatesListComponent,
    DateViewComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: DatesListComponent },
      { path: 'archive/:year/:month', component: DateViewComponent },
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
  providers: [DatesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
