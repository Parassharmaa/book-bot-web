import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NavbarComponent } from './components/navbar/navbar.component';

import { MaterialModule } from '@angular/material';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SearchComponent } from './components/search/search.component';
import { BooksPreviewComponent } from './components/books-preview/books-preview.component';

import { searchReducer } from "./_reducers/search.reducer";

import { SearchService } from './service/search.service';
import { BookListComponent } from './components/book-list/book-list.component';

import { HttpModule } from '@angular/http';
import { DownloadDialogComponent } from './components/download-dialog/download-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    BooksPreviewComponent,
    BookListComponent,
    DownloadDialogComponent,
  ],
  entryComponents: [
    DownloadDialogComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpModule,
    StoreModule.provideStore({ 
      searchReducer
    }),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
