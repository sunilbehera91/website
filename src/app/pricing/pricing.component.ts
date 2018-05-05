import { Component, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
result:any;

  constructor(private _fetch:FetchService) { }

  ngOnInit() {
  this.result = this._fetch.data;
  }

}
 