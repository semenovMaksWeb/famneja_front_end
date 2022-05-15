import { RouterReducerState } from '@ngrx/router-store';


import {ScreenModel} from "../../../screen/model/screen.model";

export interface IAppState {
  router?: RouterReducerState;
  screen?: ScreenModel;
}

export const initialAppState: IAppState = {
  screen: {}
};

export function getInitialState(): IAppState {
  return initialAppState;
}
