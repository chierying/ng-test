import {Component, OnInit} from '@angular/core';
import {User} from '../model/user';

@Component({
  selector: 'app-prime-ng-demo',
  template: `
    <div>
      <h1>Prime NG 组件</h1>

      <p-dataTable [value]="users" [editable]="true">
        <p-column field="id" header="id" [editable]="true"></p-column>
        <p-column field="name" header="name"></p-column>
      </p-dataTable>

    </div>
  `,
  styles: []
})
export class PrimeNgDemoComponent implements OnInit {
  users: User[] = [];

  constructor() {
    for (let i = 0; i < 10; i++) {
      let user = new User(i.toString(), `Car${i}`);
      this.users.push(user);
    }
  }

  ngOnInit() {
  }

}
