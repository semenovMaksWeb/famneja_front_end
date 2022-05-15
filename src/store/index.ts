import {
  ActionReducerMap,
  MetaReducer,
} from '@ngrx/store';


import {StateTest} from "./test/test.state";
import {reducerTest} from "./test/test.reducers";

export interface State {
  test: StateTest;
}

export const reducers: ActionReducerMap<State, any> = {
  test: reducerTest
};



export const selectAll = (state:State) => state;




export const metaReducers: MetaReducer<State>[] = [];

