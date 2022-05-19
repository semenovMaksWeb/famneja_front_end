import { Action } from '@ngrx/store';
import {ScreenModel} from "../../modules/screen/model/screen.model";

export enum ScreenEAction {
  StoreSaveScreen = '[screen] Save',
  TableSaveDataset = "[table] SaveDataset",
  StoreTableSchemaW = "[table] StoreTableSchemaW"
}
export class StoreSaveScreen implements Action {
  readonly type = ScreenEAction.StoreSaveScreen;

  constructor(public payload: ScreenModel) { }
}

export class StoreTableSaveDataset implements Action {
  readonly type = ScreenEAction.TableSaveDataset;

  constructor(public payload: { key:string, value:any }) { }
}
export class StoreTableSchemaW implements Action {
  readonly type = ScreenEAction.StoreTableSchemaW;

  constructor(public payload: { id_component:string, key_schema:string, value:any }) { }
}


export type ScreenAction = StoreSaveScreen | StoreTableSaveDataset | StoreTableSchemaW;
