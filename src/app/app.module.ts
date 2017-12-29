import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AccordionModule} from 'primeng/primeng';     //accordion and accordion tab
import {DataTableModule, SharedModule} from 'primeng/primeng';


import {AppComponent} from './app.component';
import {UserService} from './service/user.service';
import {ThreadListComponent} from './component/thread-list.component';
import {PrimeNgDemoComponent} from './component/prime-ng-demo.component';
import {BookService} from './service/books.service';
import {BookComponent} from './component/book.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ThreadListComponent,
    PrimeNgDemoComponent,
    BookComponent,
  ],
  imports: [
    BrowserModule,
    AccordionModule,
    DataTableModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
