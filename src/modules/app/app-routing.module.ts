import { NgModule } from '@angular/core';
import {RouterModule, Routes, UrlSegment} from '@angular/router';
import {ScreenComponent} from "../screen/screen.component";

const routes: Routes = [{
  matcher: screenRouter, component: ScreenComponent, pathMatch: 'full',
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

function screenRouter(url: UrlSegment[]) {
  return url[0].path.startsWith('screen') ? ({consumed: url}) : null;
}
