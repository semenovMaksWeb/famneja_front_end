import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import {ScreenApiService} from "../../api/screen/screen-api.service";
import {IAppState} from "../app/store/state/app.store";
import {Store, select} from "@ngrx/store";
import {SaveScreen} from "../app/store/actions/screen.actions";
import {selectScreen} from "../app/store/selector/screen.selector";

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.less'],
  providers: [ScreenApiService]
})
export class ScreenComponent implements OnInit {
  screen$ = this.store.pipe(select(selectScreen));
  url_back: string = "";
  constructor(private router : Router, private screenApiService:ScreenApiService, private  store:Store<IAppState>) {}

   ngOnInit(): void {
     this.url_back = this.router.url.replace("/screen", "");
     this.screenApiService.screenGet(this.url_back).subscribe((data) => {
       this.store.dispatch(new SaveScreen(data));
     });
   }

}
