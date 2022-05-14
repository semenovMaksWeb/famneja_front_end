import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseApiService} from "../base/base-api.service";

@Injectable({
  providedIn: 'root'
})
export class ScreenApiService extends BaseApiService{

  constructor(private httpClient: HttpClient) {
    super();
  }
  async screenGet(name:string){
    const data = await this.httpClient.post(`${this.baseUrlApi}/screen?id=${name}`, {});
  }
}
