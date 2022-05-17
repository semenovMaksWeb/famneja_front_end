import { Injectable, Pipe } from '@angular/core';
@Pipe({
  name: 'keyObject'
})

@Injectable()
export class KeyObject {

  transform(value:any):any {
    let keys = [];
    for (let key in value) {
      keys.push({key: key, value: value[key]});
    }
    return keys;
  }}
