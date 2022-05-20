import {Component, Input, OnInit} from '@angular/core';
import {BreadcrumbsModel} from "../../../modules/screen/model/breadcrumbs.model";
import {TypeNullModule} from "../../../type/typeNull.module";

@Component({
  selector: 'app-breadcrumbs-list',
  templateUrl: './breadcrumbs-list.component.html',
  styleUrls: ['./breadcrumbs-list.component.less']
})
export class BreadcrumbsListComponent implements OnInit {

  constructor() {
  }

  @Input() breadcrumbs: TypeNullModule<BreadcrumbsModel[]> = [];

  ngOnInit(): void {
    console.log("ngOnInit breadcrumbs-list");
  }

}
