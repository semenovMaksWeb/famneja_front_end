import {initialScreenState} from "./screen.state";
import {ScreenAction, ScreenEAction} from "./screen.actinons";

export function reducerScreen(state = initialScreenState, action: ScreenAction) {
  switch (action.type) {
    // save screen
    case ScreenEAction.StoreSaveScreen:
      return {
        ...state,
        screen: action.payload
      }
    //  save dataset
    case ScreenEAction.TableSaveDataset:
      return {
          ...state,
          screen: {
            ...state.screen,
            components: {
              ...state.screen.components,
              [action.payload.key]:{
                ...state?.screen?.components?.[action.payload.key],
                dataset:  action.payload.value
              }
            }
          },
        }
    //    save schema table w
    case ScreenEAction.StoreTableSchemaW:
      return {
        ...state,
        screen: {
          ...state,screen,
          components:{
            ...state.screen.components,
            [action.payload.id_component]:{
              ...state?.screen?.components?.[action.payload.id_component],
              schema_table: {
                ...state?.screen?.components?.[action.payload.id_component]?.schema_table,
                [action.payload.key_schema]: {
                  ...state?.screen?.components?.[action.payload.id_component]?.schema_table?.[action.payload.key_schema],
                  w: action.payload.value
                }
              }
            }
          }
        }

      }
    default:
      return state;
  }
}
