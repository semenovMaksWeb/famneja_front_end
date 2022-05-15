import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import {ScreenApiService} from "../../api/screen/screen-api.service";
import { Store } from '@ngrx/store';
import {State} from '../../store';
import {Observable} from "rxjs";
import {Select} from "../../store/test/test.actinons";
import {getIds, getSelected} from "../../store/test/test.select";
@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.less'],
  providers: [ScreenApiService]
})
export class ScreenComponent implements OnInit {
  selected$: Observable<any>;
  // screen$ = this.store.pipe(select(selectScreen));
  url_back: string = "";
  constructor(private store: Store<State>,private router : Router, private screenApiService:ScreenApiService) {
    this.selected$ = store.select(getSelected);
  }


  // constructor(private router : Router, private screenApiService:ScreenApiService){}
  // constructor(private router : Router, private screenApiService:ScreenApiService, private  store:Store<AppState>) {}

   ngOnInit(): void {
     this.store.dispatch(new Select(31));
     this.url_back = this.router.url.replace("/screen", "");
     // this.screenApiService.screenGet(this.url_back).subscribe((data) => {
     //   this.store.dispatch(new SaveScreen(data));
     // });
   }

}
