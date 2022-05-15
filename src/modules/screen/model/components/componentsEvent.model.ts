import {AnyModel} from "../../../../type/any.model";

export interface ComponentsEventModel{
  id: number,
  name: string,
  order: number,
  params: {[key:string]: AnyModel},
}
