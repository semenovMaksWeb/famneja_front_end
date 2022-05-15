import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import {ScreenApiService} from "../../api/screen/screen-api.service";
import { Store } from '@ngrx/store';
import {State} from '../../store';
import {Observable} from "rxjs";
import {selectorBreadcrumbsAll, selectorScreenAll} from "../../store/screen/screen.select";
import {ScreenModel} from "./model/screen.model";
import {StoreSaveScreen} from "../../store/screen/screen.actinons";
import {BreadcrumbsModel} from "./model/breadcrumbs.model";
import {TypeNullModule} from "../../type/typeNull.module";
@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.less'],
  providers: [ScreenApiService]
})
export class ScreenComponent implements OnInit {
  screen$: Observable<ScreenModel>;
  breadcrumbs$: Observable<TypeNullModule<BreadcrumbsModel[]>>;
  url_back: string = "";
  constructor(private store: Store<State>,private router : Router, private screenApiService:ScreenApiService) {
    this.screen$ = store.select(selectorScreenAll);
    this.breadcrumbs$ = store.select(selectorBreadcrumbsAll);
    this.screen$.subscribe((data)=>{
      console.log(data)
    })
  }

   ngOnInit(): void {
     this.url_back = this.router.url.replace("/screen", "");
     this.screenApiService.screenGet(this.url_back).subscribe((data) => {
       this.store.dispatch(new StoreSaveScreen(data));
     });
   }

}
