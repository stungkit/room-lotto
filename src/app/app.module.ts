import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BedChartComponent } from './user/bed-chart/bed-chart.component';
import { TrialFormComponent } from './user/trial-form/trial-form.component';
import { UserService } from './user/user.service';
import { UserTrackerService } from './user/user-tracker.service';
import { ResultsService } from './user/results.service';

@NgModule({
  declarations: [
    AppComponent,
    BedChartComponent,
    TrialFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [UserService, UserTrackerService, ResultsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
