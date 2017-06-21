import 'rxjs/add/operator/let';
import 'rxjs/add/operator/take';
import { Http, Response } from '@angular/http';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { SearchService } from './service/search.service'
import { Book } from './models/book';

import { LOADING, COMPLETE }  from './_actions/searchUI.actions';
import { searchUIReducer } from './_reducers/searchUI.reducer'


@Component({ 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  books$: Observable<Book[]>;

  loading$: Observable<boolean>;


  constructor(private store: Store<any>, private searchbook : SearchService) {
    
    this.loading$ = this.store.select('searchUIReducer');

    console.log(this.loading$);

  }

  search(query: string) : any {
      if (query!="") {
        this.loading();
        this.books$ =  this.searchbook.searchBooks(query).debounceTime(200);
        this.books$.subscribe(() => {this.complete(); console.log("loader off")});
      }
  }


  loading() {
    this.store.dispatch({
      type: LOADING
    });
  }

  complete() {
    this.store.dispatch({
      type: COMPLETE
    });
  }
}
