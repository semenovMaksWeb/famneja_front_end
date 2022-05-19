import {BreadcrumbsModel} from "./breadcrumbs.model";
import {ComponentsModel} from "./components/components.model";

export interface ScreenModel{
  breadcrumbs?:BreadcrumbsModel[],
  components?: {[key:string]: ComponentsModel},
  screen?: {
    id?: number,
    url?:string,
  },
}
