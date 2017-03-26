import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ResultsService } from '../results.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-trial-form',
  templateUrl: './trial-form.component.html',
  styleUrls: ['./trial-form.component.css']
})
export class TrialFormComponent implements OnInit {
  trialForm: FormGroup;
  bedTracker = {};

  constructor(private formBuilder: FormBuilder,
              private resultsService: ResultsService,
              private userService: UserService) { }

  ngOnInit() {
    this.trialForm = this.formBuilder.group({
      'days': ['', [Validators.required, this.validateDays]]
    });
  }

  validateDays(formControl: FormControl) {
    const n = +formControl.value;

    if (!n) {
      return { 'validateDays': false };
    } else if (n % 1 != 0) {
      return { 'validateDays': false };
    } else if (n < 0) {
      return { 'validateDays': false };
    } else if (n > 7) {
      return { 'validateDays': false };
    } else {
      return null;
    }
  }

  onSubmit() {
    this.resultsService.clearDatabase();
  }

  resetBedTracker() {
    this.bedTracker = {};
    for (let user of this.userService.users) {
      
    }
  }

}
