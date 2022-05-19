import {
  ActionReducerMap,
  MetaReducer,
} from '@ngrx/store';


import {StateTest} from "./test/test.state";
import {reducerTest} from "./test/test.reducers";
import {reducerScreen} from "./screen/screen.reducers";
import {ScreenModel} from "../modules/screen/model/screen.model";
import {StateScreen} from "./screen/screen.state";

export interface State {
  test: StateTest;
  screen: StateScreen;
}

export const reducers: ActionReducerMap<State, any> = {
  test: reducerTest,
  // @ts-ignore
  screen: reducerScreen
};



export const selectAll = (state:State) => state;




export const metaReducers: MetaReducer<State>[] = [];

