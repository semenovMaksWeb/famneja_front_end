import {Component, Input, OnInit} from '@angular/core';
import {ComponentsModel} from "../../modules/screen/model/components/components.model";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {

  }
  @Input() cms?: ComponentsModel = {};
  @Input() id?: number;
}
