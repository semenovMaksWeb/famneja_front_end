import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseApiService {
  constructor() { }
  public baseUrlApi:string = "https://localhost:7256";
}
