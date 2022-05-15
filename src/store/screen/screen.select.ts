import {
  createSelector,
} from '@ngrx/store';


import {selectAll, State} from "../index";

export const selectorScreenAll = createSelector(
  selectAll,
  (state: State) => state.screen.screen,
);
