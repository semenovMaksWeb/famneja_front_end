import {Component, OnInit} from '@angular/core';
import {NavigationStart, Router} from "@angular/router";
import {ScreenApiService} from "../../api/screen/screen-api.service";
import {Store} from '@ngrx/store';
import {State} from '../../store';
import {Observable} from "rxjs";
import {selectorBreadcrumbsAll, selectorComponents, selectorScreenAll} from "../../store/screen/screen.select";
import {ScreenModel} from "./model/screen.model";
import {StoreSaveScreen} from "../../store/screen/screen.actinons";
import {BreadcrumbsModel} from "./model/breadcrumbs.model";
import {TypeNullModule} from "../../type/typeNull.module";
import {ComponentsModel} from "./model/components/components.model";

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.less'],
  providers: [ScreenApiService]
})
export class ScreenComponent implements OnInit {
  screen$: Observable<ScreenModel>;
  components$: Observable<TypeNullModule<{ [key: string]: ComponentsModel }>>;
  breadcrumbs$: Observable<TypeNullModule<BreadcrumbsModel[]>>;

  // url_back: string = "";
  constructor(private store: Store<State>, private router: Router, private screenApiService: ScreenApiService) {
    this.screen$ = store.select(selectorScreenAll);
    this.components$ = store.select(selectorComponents);
    this.breadcrumbs$ = store.select(selectorBreadcrumbsAll);
    // this.screen$.subscribe((d) => {
    //   console.log(d);
    // });
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.loaderScreen(event.url);
      }
    })
  }

  loaderScreen(router_link: string) {
    let url_back: string = router_link.replace("/screen", "") || "/";
    this.screenApiService.screenGet(url_back).subscribe((data) => {
      this.store.dispatch(new StoreSaveScreen(data));
      console.log(data)
    });
  }

  ngOnInit(): void {
    this.loaderScreen(this.router.url);
  }
}
