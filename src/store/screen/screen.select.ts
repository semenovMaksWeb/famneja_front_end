import {
  createSelector,
} from '@ngrx/store';


import {selectAll, State} from "../index";

export const selectorComponents = createSelector(
  selectAll,
  (state: State) => state.screen.screen.components,
);

export const selectorScreenAll = createSelector(
  selectAll,
  (state: State) => state.screen.screen,
);

export const selectorBreadcrumbsAll = createSelector(
  selectAll,
  (state: State) => state.screen.screen.breadcrumbs,
);
