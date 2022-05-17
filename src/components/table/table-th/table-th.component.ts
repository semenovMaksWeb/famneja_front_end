import {Component, Input, OnInit} from '@angular/core';
import {ComponentsModel} from "../../../modules/screen/model/components/components.model";
import {ComponentsSchemaTableModel} from "../../../modules/screen/model/components/componentsSchemaTable.model";

@Component({
  selector: 'app-table-th',
  templateUrl: './table-th.component.html',
  styleUrls: ['./table-th.component.less']
})
export class TableThComponent implements OnInit {
  style = {};

  constructor() {
    if (this.schema?.w) {
      this.style = {
        'width': this.schema?.w
      }
    }
  }

  ngOnInit(): void {
  }

  @Input() cms: ComponentsModel = {};
  @Input() schema?: ComponentsSchemaTableModel;

}
