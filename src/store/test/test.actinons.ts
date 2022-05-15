import { Action } from '@ngrx/store';


export const SELECT = '[Films] Select';
export const ADD_ONE = '[Films] Add One';

export class Select implements Action {
  readonly type = SELECT;

  constructor(public payload: number) { }
}

export class AddOne implements Action {
  readonly type = ADD_ONE;

  constructor(public payload: any) { }
}

export type ActionTest = AddOne | Select;
