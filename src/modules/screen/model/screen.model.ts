import {BreadcrumbsModel} from "./breadcrumbs.model";

export interface ScreenModel{
  breadcrumbs?:BreadcrumbsModel,
  components?:any,
  screen?: {
    id: number,
    url:string,
  },
}
