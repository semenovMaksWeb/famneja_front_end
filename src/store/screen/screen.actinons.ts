import { Action } from '@ngrx/store';
import {ScreenModel} from "../../modules/screen/model/screen.model";

export enum ScreenEAction {
  StoreSaveScreen = '[screen] Save',
}
export class StoreSaveScreen implements Action {
  readonly type = ScreenEAction.StoreSaveScreen;

  constructor(public payload: ScreenModel) { }
}
export type ScreenAction = StoreSaveScreen;
