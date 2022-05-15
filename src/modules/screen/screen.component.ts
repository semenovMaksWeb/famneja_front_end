import { Component, OnInit } from '@angular/core';
import {NavigationStart, Router} from "@angular/router";
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
  // url_back: string = "";
  constructor(private store: Store<State>,private router : Router, private screenApiService:ScreenApiService) {
    this.screen$ = store.select(selectorScreenAll);
    this.breadcrumbs$ = store.select(selectorBreadcrumbsAll);
    this.router.events.subscribe((event)=>{
      if (event instanceof NavigationStart) {
        this.loaderScreen(event.url);
        // Show loading indicator
      }
    })
  }
  loaderScreen(router_link:string){
    let url_back:string = router_link.replace("/screen", "") || "/";
    this.screenApiService.screenGet(url_back).subscribe((data) => {
      this.store.dispatch(new StoreSaveScreen(data));
    });
  }
   ngOnInit(): void {
    this.loaderScreen(this.router.url);
   }
}
