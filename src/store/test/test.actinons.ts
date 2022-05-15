import { Action } from '@ngrx/store';


export enum EActionTest {
  SELECT = '[Films] Select',
  ADD_ONE = '[Films] Add One'
}



export class Select implements Action {
  readonly type = EActionTest.SELECT;

  constructor(public payload: number) { }
}

export class AddOne implements Action {
  readonly type = EActionTest.ADD_ONE;

  constructor(public payload: any) { }
}

export type ActionTest = AddOne | Select;
