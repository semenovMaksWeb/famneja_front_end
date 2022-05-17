import {Component, Input, OnInit} from '@angular/core';
import {ComponentsModel} from "../model/components/components.model";
import {TypeNullModule} from "../../../type/typeNull.module";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.less']
})
export class ContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() components: TypeNullModule<{[key:string]: ComponentsModel}> = {};
}
