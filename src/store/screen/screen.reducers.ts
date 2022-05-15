import {initialScreenState} from "./screen.state";
import {ScreenAction, ScreenEAction} from "./screen.actinons";

export function reducerScreen(state = initialScreenState, action: ScreenAction) {
  switch (action.type) {
    case ScreenEAction.StoreSaveScreen:
      return {
        ...state,
        screen: action.payload
      }
    default:
      return state;
  }
}
