import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsListComponent } from './breadcrumbs/breadcrumbs-list/breadcrumbs-list.component';
import { BreadcrumbsItemComponent } from './breadcrumbs/breadcrumbs-item/breadcrumbs-item.component';
import {RouterModule} from "@angular/router";




@NgModule({
  declarations: [
    BreadcrumbsListComponent,
    BreadcrumbsItemComponent
  ],
  exports: [
    BreadcrumbsListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
