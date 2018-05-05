import { Component } from '@angular/core';
import { ServicefetchService } from './servicefetch.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  result: any;
  name='sunil kumar behera';
  time = 0;
  sunil(){
  this.time++;
  }

  constructor(private _fetchData: ServicefetchService){
this.result = _fetchData._data;
  }
}
