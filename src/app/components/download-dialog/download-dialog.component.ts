import { Component } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { SearchService } from '../../service/search.service';
import { DownloadUrl } from '../../models/download-url';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-download-dialog',
  templateUrl: './download-dialog.component.html',
  styleUrls: ['./download-dialog.component.css']
})
export class DownloadDialogComponent {
  title: string;
  url: string;
  download_status = 'Wait..';

  key: string;
  constructor(public dialogRef: MdDialogRef<DownloadDialogComponent>, private getkey: SearchService) { }

  get_hash(s: string) {
    return s.split('=')[1];
  }

  make_url() {
    this.download_status = 'Wait..';
    const hash = this.get_hash(this.url);
    console.log(hash)
    this.getkey.retrieveKey(hash).subscribe(v => {
      this.key = v.url;
      this.download_status = 'Download';
    })
  }

}
