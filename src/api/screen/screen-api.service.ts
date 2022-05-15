import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseApiService} from "../base/base-api.service";
import {ScreenModel} from "../../modules/screen/model/screen.model";

@Injectable({
  providedIn: 'root'
})
export class ScreenApiService extends BaseApiService{
  constructor(private httpClient: HttpClient) {
    super();
  }
  screenGet(name:string){
    return this.httpClient.post<ScreenModel>(`${this.baseUrlApi}/screen?url=${name}`, {}, {});
  }
}
