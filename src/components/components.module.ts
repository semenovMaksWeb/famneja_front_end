import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BreadcrumbsListComponent} from './breadcrumbs/breadcrumbs-list/breadcrumbs-list.component';
import {BreadcrumbsItemComponent} from './breadcrumbs/breadcrumbs-item/breadcrumbs-item.component';
import {RouterModule} from "@angular/router";
import {TableComponent} from './table/table.component';
import { TableThComponent } from './table/table-th/table-th.component';
import { TableHeaderComponent } from './table/table-header/table-header.component';
import {KeyObject} from "../pipe/keyobject";
import { TableBodyComponent } from './table/table-body/table-body.component';
import { TableTrComponent } from './table/table-tr/table-tr.component';
import { TableTdComponent } from './table/table-td/table-td.component';
import { TableThResizeComponent } from './table/table-th/table-th-resize/table-th-resize.component';
import { ButtonComponent } from './button/button.component';


@NgModule({
  declarations: [
    BreadcrumbsListComponent,
    BreadcrumbsItemComponent,
    TableComponent,
    TableThComponent,
    TableHeaderComponent,
    KeyObject,
    TableBodyComponent,
    TableTrComponent,
    TableTdComponent,
    TableThResizeComponent,
    ButtonComponent
  ],
  exports: [
    BreadcrumbsListComponent,
    TableComponent,
    KeyObject
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule {
}
