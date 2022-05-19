import {Component, Input, OnInit} from '@angular/core';
import {ComponentsModel} from "../../../../modules/screen/model/components/components.model";
import {ComponentsSchemaTableModel} from "../../../../modules/screen/model/components/componentsSchemaTable.model";


@Component({
  selector: 'app-table-th-resize',
  templateUrl: './table-th-resize.component.html',
  styleUrls: ['./table-th-resize.component.less']
})
export class TableThResizeComponent implements OnInit {
  isMove = false;
  startOffset = 0;
  constructor() { }
  mouseup(){
    console.log('mouseup');
    this.isMove = false;
  }
  mousedown(e: any){
    e.preventDefault();
    if (this?.schema?.w !== undefined){
      this.startOffset = this.schema.w - e.pageX;
      this.isMove = true;
    }
    console.log('mousedown')
  }
  ngOnInit(): void {
    document.addEventListener('mouseup', this.mouseup);
  }
  @Input() cms: ComponentsModel = {};
  @Input() schema?: ComponentsSchemaTableModel;
}
