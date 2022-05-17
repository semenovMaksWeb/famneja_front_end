import {Component, Input, OnInit} from '@angular/core';
import {ComponentsModel} from "../../../modules/screen/model/components/components.model";

@Component({
  selector: 'app-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.less']
})
export class TableHeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  @Input() cms: ComponentsModel = {};
}
