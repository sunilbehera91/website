import { Injectable } from '@angular/core';

@Injectable()
export class FetchService {
data:any;

  constructor() {
  this.data=[
  {
  id:1,
  title:'first data',
  body:'first body',
  },
  {id:2,
  title:'second data',
  body:'second body',
  }
  ] }

}
