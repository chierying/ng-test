import {Injectable} from '@angular/core';
import {Thread} from '../model/thread';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ThreadService {
  threads$: Subject<Thread[]>;
  currentThread$: Subject<Thread>;

  constructor() {

    this.threads$ = new BehaviorSubject(null);
  }

}

