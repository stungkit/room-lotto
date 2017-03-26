import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class UserService {
  users: User[] = [
    new User('Smati'),
    new User('Johnny'),
    new User('Darwin'),
    new User('Aaron'),
    new User('Emily'),
    new User('Dedi'),
    new User('Julie'),
    new User('Lily')
  ];

  constructor() { }

}
