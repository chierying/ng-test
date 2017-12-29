import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/do';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class BookService {

  constructor(private http: HttpClient) {
  }

  findBooks(name: string): Observable<BookSearchResult.RootObject> {
    return this.http.get<BookSearchResult.RootObject>(`/v2/book/search?q=${name}`)
      .do(data => {
        console.log('books search result:');
        console.log(data);
      });
  }

}
