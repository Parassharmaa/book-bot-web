import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Book } from '../models/book';
import { DownloadUrl } from '../models/download-url'

@Injectable()
export class SearchService {

	private API_PATH = "https://book-bot-ai.herokuapp.com/api/";

	constructor(private http: Http) {}

	searchBooks(queryTitle: string): Observable<Book[]> {
		return this.http.get(`${this.API_PATH}search?q=${queryTitle}`)
			.map(res => res.json().books || []);
	}

	retrieveKey(hash: string): Observable<DownloadUrl> {
		return this.http.get(`${this.API_PATH}download?hash=${hash}`)
			.map(res => res.json());
	}
}