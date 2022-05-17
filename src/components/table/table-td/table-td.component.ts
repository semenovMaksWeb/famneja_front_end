import {Component, Input, OnInit} from '@angular/core';
import {ComponentsModel} from "../../../modules/screen/model/components/components.model";
import {ComponentsSchemaTableModel} from "../../../modules/screen/model/components/componentsSchemaTable.model";
import {AllStyle} from "../libs/all-style";

@Component({
  selector: 'app-table-td',
  templateUrl: './table-td.component.html',
  styleUrls: ['./table-td.component.less']
})
export class TableTdComponent implements OnInit {
  style = {};
  constructor() {
  }

  ngOnInit(): void {
    this.style = AllStyle(this.schema);
  }

  @Input() value: any;
  @Input() cms: ComponentsModel = {};
  @Input() schema?: ComponentsSchemaTableModel;

}
