import {initialScreenState} from "./screen.state";
import {ScreenAction, ScreenEAction} from "./screen.actinons";

export function reducerScreen(state = initialScreenState, action: ScreenAction) {
  switch (action.type) {
    case ScreenEAction.StoreSaveScreen:
      return {
        ...state,
        screen: action.payload
      }
    case ScreenEAction.TableSaveDataset:
      return {
          ...state,
          screen: {
            ...state.screen,
            components: {
              ...state.screen.components,
              [action.payload.key]:{
                ...state?.screen?.components[action.payload.key],
                dataset:  action.payload.value
              }
            }
          },
        }
    default:
      return state;
  }
}
