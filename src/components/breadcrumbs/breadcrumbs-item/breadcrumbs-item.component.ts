import {Component, Input, OnInit} from '@angular/core';
import {TypeNullModule} from "../../../type/typeNull.module";
import {BreadcrumbsModel} from "../../../modules/screen/model/breadcrumbs.model";

@Component({
  selector: 'app-breadcrumbs-item',
  templateUrl: './breadcrumbs-item.component.html',
  styleUrls: ['./breadcrumbs-item.component.less']
})
export class BreadcrumbsItemComponent implements OnInit {

  constructor() {
  }

  @Input() breadcrumb: TypeNullModule<BreadcrumbsModel> = {};

  ngOnInit(): void {
  }

}
