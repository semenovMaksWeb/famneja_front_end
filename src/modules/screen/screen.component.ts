import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import {ScreenApiService} from "../../api/screen/screen-api.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.less'],
  providers: [ScreenApiService]
})
export class ScreenComponent implements OnInit {
  url_back: string = "";
  constructor(private router : Router, private screenApiService:ScreenApiService) {}

   ngOnInit(): void {
   this.url_back = this.router.url.replace("/screen", "");
   this.screenApiService.screenGet(this.url_back).subscribe((data)=>{
     console.log(data)
   });
  }

}
