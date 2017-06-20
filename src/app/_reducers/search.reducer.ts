import { Action } from '@ngrx/store';
import { LOADING, COMPLETE } from "../_actions/search.actions";

export function searchReducer(state: boolean = false , action: Action) {
  switch (action.type) {
    case LOADING:
      return true
    case COMPLETE:
      return false

    default:
      return state;
  }
}