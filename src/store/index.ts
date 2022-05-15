import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
  MetaReducer,
} from '@ngrx/store';

import * as fromFilms from './test/test.reducers';

export interface State {
  films: fromFilms.State;
}

export const reducers: ActionReducerMap<State, any> = {
  films: fromFilms.reducer
};


export const metaReducers: MetaReducer<State>[] = [];


export const getFilmState = createFeatureSelector<fromFilms.State>('films');

