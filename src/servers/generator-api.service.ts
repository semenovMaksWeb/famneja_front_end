import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseApiService} from "../api/base/base-api.service";
import {ComponentsApiModel} from "../modules/screen/model/components/componentsApi.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GeneratorApiService extends BaseApiService {

  constructor(private httpClient: HttpClient) {
    super();
  }
  public generatorApi(config: ComponentsApiModel, params?:any, body?:any):Observable<any>{
    const url = `${this.baseUrlApi}${config.url}`;
    if (config.type === "post"){
      return this.httpClient.post<any>(url, body, {params: params } );
    }
    if (config.type === "delete"){
      return this.httpClient.delete<any>(url, {params: params});
    }
    if (config.type === "put"){
      return this.httpClient.put<any>(url, body, {params: params});
    }
    if (config.type === "get"){
      return this.httpClient.get<any>(url, params);
    }
    return new Observable();
  }
}
