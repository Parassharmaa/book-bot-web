import {Effect, Actions, toPayload} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable()
export class SearchEffects {
  constructor(private action$: Actions) { }
}