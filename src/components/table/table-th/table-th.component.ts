import {Component, Input, OnInit} from '@angular/core';
import {ComponentsModel} from "../../../modules/screen/model/components/components.model";
import {ComponentsSchemaTableModel} from "../../../modules/screen/model/components/componentsSchemaTable.model";
import {AllStyle} from "../libs/all-style";

@Component({
  selector: 'app-table-th',
  templateUrl: './table-th.component.html',
  styleUrls: ['./table-th.component.less']
})
export class TableThComponent implements OnInit {
  style = {};
  constructor() {
  }

  ngOnInit(): void {
    this.style = AllStyle(this.schema);
  }

  @Input() cms: ComponentsModel = {};
  @Input() schema?: ComponentsSchemaTableModel;

}
