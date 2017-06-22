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

import { searchUIReducer} from "./_reducers/ui.reducer";

import { SearchService } from './service/search.service';
import { BookListComponent } from './components/book-list/book-list.component';

import { HttpModule } from '@angular/http';
import { DownloadDialogComponent } from './components/download-dialog/download-dialog.component';

import { EffectsModule } from '@ngrx/effects';

import {ReactiveFormsModule,  FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';


import { TruncatePipe } from './pipes/truncate.pipe';

const appRoutes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'about', component: AboutComponent },
  { path: '**',
    redirectTo: '',
  },
  // { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    BooksPreviewComponent,
    BookListComponent,
    DownloadDialogComponent,
    AboutComponent,
    TruncatePipe
  ],
  entryComponents: [
    DownloadDialogComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.provideStore({ 
      searchUIReducer
    }),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
