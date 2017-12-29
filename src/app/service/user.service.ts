import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {User} from '../model/user';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class UserService {
  currentUser$: Observable<User>;

  constructor() {
    this.currentUser$ = new BehaviorSubject({id: '1', name: 'xiaohong'}).asObservable();
  }

}
