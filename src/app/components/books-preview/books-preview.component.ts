import { Component, Input } from '@angular/core';
import { Book } from '../../models/book';
import { MdDialog, MdDialogRef } from '@angular/material';
import { DownloadDialogComponent } from '../download-dialog/download-dialog.component';


@Component({
  selector: 'app-books-preview',
  templateUrl: './books-preview.component.html',
  styleUrls: ['./books-preview.component.css']
})

export class BooksPreviewComponent {

  @Input() book: Book;


  constructor(public dialog: MdDialog) { }

  get title() {
    return this.book.title;
  }

  get size() {
    return this.book.size;
  }

  get file() {
    return this.book.file;
  }

  get ext() {
    return this.book.ext
  }

  get author() {
    return this.book.author;
  }

  get image(): string | boolean {
    if (this.book.image) {
      return this.book.image;
    }

    return false;
  }

  openDownloadDialog(url: string, title: string) {
    const dialogRef = this.dialog.open(DownloadDialogComponent, {
      width: '70%'
    });
    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.url = url;
    dialogRef.componentInstance.make_url();
  }
}
