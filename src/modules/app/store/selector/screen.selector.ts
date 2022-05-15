import {IAppState} from "../state/app.store";
import { createSelector } from '@ngrx/store';
const state = (state: IAppState) => state;



export const selectScreen = createSelector(
  state,
  state => state.screen
)
