import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServicefetchService {
public _data: Array<any> = [];

  constructor(private _http: HttpClient) { 
_http.get('https://jsonplaceholder.typicode.com/posts')
    .subscribe(result => this._data.push(result), err => console.log(err),
    () => console.log('fetching data done...'));
  }
  sendData(){

  }
}
