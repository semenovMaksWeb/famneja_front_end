import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenComponent } from './screen.component';
import {ComponentsModule} from "../../components/components.module";



@NgModule({
  declarations: [
    ScreenComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
  ]
})
export class ScreenModule { }
