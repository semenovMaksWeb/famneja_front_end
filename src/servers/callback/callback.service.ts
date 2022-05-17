import {Injectable} from '@angular/core';
import {AnyModel} from "../../type/any.model";
import {CallbackNameModel} from "./callback-name.model";
import {GeneratorApiService} from "../generatorApi/generator-api.service";

@Injectable({
  providedIn: 'root'
})
export class CallbackService {
  constructor(private readonly generatorApiService: GeneratorApiService) {
  }

  api(params: any) {
    return  this.generatorApiService.generatorApi({
      url: params.url,
      type: params.type,
    })
  }


  startFun(name: CallbackNameModel, params: any):any {
    if (name === CallbackNameModel.api) {
      return this.api(params);
    }
  }
}
