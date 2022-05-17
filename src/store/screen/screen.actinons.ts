import { Action } from '@ngrx/store';
import {ScreenModel} from "../../modules/screen/model/screen.model";

export enum ScreenEAction {
  StoreSaveScreen = '[screen] Save',
  TableSaveDataset = "[table] SaveDataset"
}
export class StoreSaveScreen implements Action {
  readonly type = ScreenEAction.StoreSaveScreen;

  constructor(public payload: ScreenModel) { }
}

export class StoreTableSaveDataset implements Action {
  readonly type = ScreenEAction.TableSaveDataset;

  constructor(public payload: { key:string, value:any }) { }
}

export type ScreenAction = StoreSaveScreen | StoreTableSaveDataset;
