import {
  Component,
  ChangeDetectionStrategy,
  OnInit
} from '@angular/core';
import {
  Http,
  Response
} from '@angular/http';
import {
  Store
} from '@ngrx/store';
import {
  Observable
} from 'rxjs/Observable';
import {
  SearchService
} from '../../service/search.service';

import {
  Book
} from '../../models/book';
import {
  ReactiveFormsModule,
  FormControl,
  FormsModule
} from '@angular/forms';

import {
  LOADING,
  COMPLETE
} from '../../_actions/ui.actions';
import {
  searchUIReducer
} from '../../_reducers/ui.reducer';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';


import {
  ISubscription
} from 'rxjs/Subscription';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  loading$: Observable < boolean > ;
  search: FormControl;
  books$: Observable < Book[] > ;

  constructor(private store: Store < any > , private searchbook: SearchService) {
    this.loading$ = this.store.select('searchUIReducer');
    this.search = new FormControl();

  }

  ngOnInit() {
    this.books$ = this.search.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .do(_ => this.loading(true))
      .switchMap(term => {
        if (term.trim().length === 0) {
          return Observable.of([]);
        }
        return this.searchbook.searchBooks(term);
      })
      .do(_ => this.loading(false));
  }


  loading(st: boolean) {
    if (st) {
      this.store.dispatch({
        type: LOADING
      });
    } else {
      this.store.dispatch({
        type: COMPLETE
      });
    }
  }
}
