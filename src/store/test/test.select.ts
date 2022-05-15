import {
  createSelector,
} from '@ngrx/store';


import {selectAll, State} from "../index";

export const selectorTestSelected = createSelector(
  selectAll,
  (state: State) => state.test.selected,
);


