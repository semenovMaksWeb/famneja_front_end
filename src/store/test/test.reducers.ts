import {ActionTest, EActionTest} from './test.actinons';
import {initialTestState} from "./test.state";

export function reducerTest(state = initialTestState, action: ActionTest) {
  switch (action.type) {
    case EActionTest.ADD_ONE: {
      const newFilm: any = action.payload;
      return {
        ...state,
        ids: [...state.ids, newFilm.id],
        films: { ...state.films, newFilm }
      };
    }


    case EActionTest.SELECT: {
      const id = action.payload;
      return {
        ...state,
        selected: id
      };
    }

    default:
      return state;
  }
}


