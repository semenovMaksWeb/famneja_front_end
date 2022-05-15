import {IAppState} from "../state/app.store";
import { createFeatureSelector, createSelector } from '@ngrx/store';
const state = (state: IAppState) => state;

const getScreen = createFeatureSelector<IAppState>(
  'screen'
);

export const selectScreenList = createSelector(
  state,
  getScreen,
)
