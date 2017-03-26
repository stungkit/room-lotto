import { Component, OnInit } from '@angular/core';
import { ResultsService } from '../results.service';
import { User } from '../user';

@Component({
  selector: 'app-bed-chart',
  templateUrl: './bed-chart.component.html',
  styleUrls: ['./bed-chart.component.css']
})
export class BedChartComponent implements OnInit {
  results: [User[]];

  constructor(private resultsService: ResultsService) { }

  ngOnInit() {
    this.results = this.resultsService.getDatabase();
  }

}
