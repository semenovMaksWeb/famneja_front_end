import {Component, Input, OnInit} from '@angular/core';
import {ComponentsModel} from "../../../modules/screen/model/components/components.model";

@Component({
  selector: 'app-table-body',
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.less']
})
export class TableBodyComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    console.log("ngOnInit table body")
  }

  @Input() cms: ComponentsModel = {};
}
