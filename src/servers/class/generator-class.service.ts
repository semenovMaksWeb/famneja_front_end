import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneratorClassService {

  constructor() { }
  generatorClass(class_name: any){
    let result_class = "";
    if (class_name['hidden_text_overflow']){
      result_class += "text-hidden"
    }
    return result_class;
  }
}
