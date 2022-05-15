import { Action } from '@ngrx/store';
import {ScreenModel} from "../../../screen/model/screen.model";

export enum EScreenActions {
  SaveScreen = '[Screen] SaveScreen',
}

export class SaveScreen implements Action {
  public readonly type = EScreenActions.SaveScreen;
  constructor(public payload: ScreenModel) {}
}

export type ScreenActions = SaveScreen;
