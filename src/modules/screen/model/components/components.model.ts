import {ComponentsApiModel} from "./componentsApi.model";
import {ComponentsSchemaTableModel} from "./componentsSchemaTable.model";
import {AnyModel} from "../../../../type/any.model";
import {ComponentsEventModel} from "./componentsEvent.model";

export interface ComponentsModel{
  id?: number,
  type?: string,
  api?:ComponentsApiModel,
  children?: ComponentsModel[],
  schema_table?: {[key:string]: ComponentsSchemaTableModel},
  params_front?: {[key:string]: AnyModel},
  class?: {[key:string]: AnyModel},
  style?: {[key:string]: AnyModel},
  event?:{[key:string]: ComponentsEventModel[]},
  schema_form?: null,
  params?: null,
}
