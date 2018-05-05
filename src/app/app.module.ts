import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FetchService } from './fetch.service';
import { ServicefetchService } from './servicefetch.service';

import { AppComponent } from './app.component';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { PostComponent } from './post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { JsondataComponent } from './jsondata/jsondata.component';


let routes:Routes = [
{
  path:"features",
  component:FeaturesComponent
},
{
  path:"pricing",
  component:PricingComponent
},
{
  path:"post",
  component:PostComponent
}
]

@NgModule({
  declarations: [
    AppComponent,
    FeaturesComponent,
    PricingComponent,
    SidebarComponent,
    FooterComponent,
    PostComponent,
    JsondataComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [FetchService,ServicefetchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
