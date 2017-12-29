import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BookService} from '../service/books.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';


@Component({
  selector: 'app-book',
  template: `
    <p>
      works!
    </p>

    <input type="text" #searchBox/>

    <div>
      <ol *ngIf="result">
        <li *ngFor="let b of sortedBooks()">
          <p>title: {{b.title}}</p>
          <p>rating: {{b.rating.average}}</p>
          <img [src]="b.image"/>
        </li>
      </ol>
    </div>

  `,
  styles: []
})
export class BookComponent implements OnInit {
  private bookService: BookService;

  @ViewChild('searchBox')
  private searchBox: ElementRef;

  private result: BookSearchResult.RootObject;

  constructor(bookService: BookService) {
    this.bookService = bookService;
  }

  ngOnInit() {
    Observable.fromEvent(this.searchBox.nativeElement, 'keyup')
      .map((e: any) => e.target.value)
      .filter(value => value.length > 2)
      .debounceTime(200)
      .subscribe(text => {
        this.bookService.findBooks(text)
          .subscribe(v => this.result = v);
      });
  }

  sortedBooks(): BookSearchResult.Book[] {
    return this.result.books.sort((a, b) => Number.parseFloat(b.rating.average) - Number.parseFloat(a.rating.average));
  }

}
