import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ScreenModule} from "../screen/screen.module";
import {screenReducers} from "./store/reducers/screen.reducers";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    StoreModule.forRoot(screenReducers),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    BrowserModule,
    HttpClientModule,
    ScreenModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
