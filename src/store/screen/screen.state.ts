import {ScreenModel} from "../../modules/screen/model/screen.model";

export interface StateScreen {
  screen: ScreenModel
}
export const initialScreenState:StateScreen = {
  screen: {components: {}}
}
