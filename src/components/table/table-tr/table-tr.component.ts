import {Component, Input, OnInit} from '@angular/core';
import {ComponentsModel} from "../../../modules/screen/model/components/components.model";

@Component({
  selector: 'app-table-tr',
  templateUrl: './table-tr.component.html',
  styleUrls: ['./table-tr.component.less']
})
export class TableTrComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  @Input() dataset: any;
  @Input() cms: ComponentsModel = {};
}
