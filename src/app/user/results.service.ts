import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class ResultsService {
  database: [User[]] = [
    [
      new User('Smati'),
      new User('Johnny'),
      new User('Darwin'),
      new User('Aaron'),
      new User('Emily'),
      new User('Dedi'),
      new User('Julie'),
      new User('Lily')
    ]
  ];

  // database: [User[]];

  constructor() { }

  clearDatabase() {
    this.database.length = 0;
  }

  getDatabase() {
    return this.database;
  }

  addResult(users: User[]) {
    this.database.push(users);
  }
}
