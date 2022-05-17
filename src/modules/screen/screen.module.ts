import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenComponent } from './screen.component';
import {ComponentsModule} from "../../components/components.module";
import { ContainerComponent } from './container/container.component';



@NgModule({
  declarations: [
    ScreenComponent,
    ContainerComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
  ]
})
export class ScreenModule { }
