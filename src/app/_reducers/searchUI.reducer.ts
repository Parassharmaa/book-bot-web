import { Action } from '@ngrx/store';
import { LOADING, COMPLETE } from "../_actions/searchUI.actions";

export function searchUIReducer(state: boolean = false , action: Action) {
  switch (action.type) {
    case LOADING:
      return true
    case COMPLETE:
      return false
    default:
      return state;
  }
}