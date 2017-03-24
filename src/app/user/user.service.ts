import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class UserService {
  users: User[] = [
    new User('Smati', 'black'),
    new User('Johnny', 'red'),
    new User('Darwin', 'blue'),
    new User('Aaron', 'orange'),
    new User('Emily', 'pink'),
    new User('Dedi', 'purple'),
    new User('Julie', 'green'),
    new User('Lily', 'yellow')
  ];

  constructor() { }

}
