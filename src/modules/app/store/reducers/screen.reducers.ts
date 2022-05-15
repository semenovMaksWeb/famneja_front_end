import { EScreenActions, ScreenActions } from '../actions/screen.actions';
import { initialScreenState, IScreenState } from '../state/screen.state';

export const screenReducers = (
  state = initialScreenState,
  action: ScreenActions
): IScreenState => {
  switch (action.type) {
    case EScreenActions.SaveScreen: {
      return {
        ...state,
        screen: action.payload
      };
    }
    default:
      return state;
  }
};
