import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ResultsService } from '../results.service';
import { UserService } from '../user.service';
import { User } from '../user';

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

    this.resetBedTracker();
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
    this.resetBedTracker();

    for (let i = 0; i < this.trialForm.value.days; i++) {
      let users: User[] = [];
      var alreadyPicked = [];
      for (let user of this.userService.users) {
        do {
          var bedId = this.getRandomIntFromInterval(1, 8);
        } while (this.bedTracker[user.name].includes(bedId) || alreadyPicked.includes(bedId));
        this.bedTracker[user.name].push(bedId);
        alreadyPicked.push(bedId);
        user.bedId = bedId;
        users.push(new User(user.name, user.bedId));
      }
      this.resultsService.addResult(users);
    }

    for (let users of this.resultsService.getDatabase()) {
      users.sort(function(a, b) {
        return a.bedId - b.bedId;
      });
    }
  }

  resetBedTracker() {
    this.bedTracker = {};
    for (let user of this.userService.users) {
      this.bedTracker[user.name] = [];
    }
  }

  getRandomIntFromInterval(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
  }

}
