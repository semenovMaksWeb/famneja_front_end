import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
  MetaReducer,
} from '@ngrx/store';


import {State} from "../index";

export const getIdsFun = (state: any) => state.ids;
export const getFilmsFun = (state: any) => state;
export const getSelectedFun = (state: any) => state.selected;

export const getFilmState = createFeatureSelector<State>('films');


export const getIds = createSelector(
  getFilmState,
  getIdsFun,
);


export const getFilms = createSelector(
  getFilmState,
  getFilmsFun,
);

export const getSelected = createSelector(
  getFilmState,
  getSelectedFun,
);


