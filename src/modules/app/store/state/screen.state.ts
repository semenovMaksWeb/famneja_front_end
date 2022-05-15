import {ScreenModel} from "../../../screen/model/screen.model";


export interface IScreenState {
  screen: ScreenModel;

}

export const initialScreenState: IScreenState = {
  screen: {screen: {id:1, url: 'ad'}}
};
