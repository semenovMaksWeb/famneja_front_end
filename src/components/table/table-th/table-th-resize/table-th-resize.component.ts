import {Component, Input, OnInit} from '@angular/core';
import {ComponentsModel} from "../../../../modules/screen/model/components/components.model";
import {ComponentsSchemaTableModel} from "../../../../modules/screen/model/components/componentsSchemaTable.model";
import {Store} from "@ngrx/store";
import {StoreTableSchemaW} from "../../../../store/screen/screen.actinons";


@Component({
  selector: 'app-table-th-resize',
  templateUrl: './table-th-resize.component.html',
  styleUrls: ['./table-th-resize.component.less']
})
export class TableThResizeComponent implements OnInit {
  public isMove = false;
  startOffset = 0;

  constructor(private readonly store: Store) {
    console.log('constructor table-th-resize');
  }

  mouseup() {
    this.isMove = false;
  }

  move(e: any) {
    if (this.isMove) {
      let newW = this.startOffset + e.pageX;
      if (newW < 30) {
        newW = 30;
      }
      if (this?.cms?.id && this?.schema?.key) {
        this.store.dispatch(new StoreTableSchemaW({
          id_component: this.cms.id.toString(),
          key_schema: this.schema?.key,
          value: newW
        }))
      }
    }

  }

  renderComponent() {
    console.log("renderComponent table-th-resize")
  }

  mousedown(e: any) {
    // e.preventDefault();
    if (this?.schema?.w !== undefined) {
      this.startOffset = this.schema.w - e.pageX;
      this.isMove = true;
    }
  }

  ngOnInit(): void {
      console.log("ngOnInit table-th-resize")
      document.addEventListener('mousemove', this.move.bind(this));
      document.addEventListener("mouseup", this.mouseup.bind(this));
  }

  @Input() cms: ComponentsModel = {};
  @Input() schema?: ComponentsSchemaTableModel;
}
