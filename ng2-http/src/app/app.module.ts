import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { YoutubeApiServiceInjectables } from './youtube-search/services/YoutubeApiService';

import { AppComponent } from './app.component';
import { SimpleHttpComponent } from './simple-http/simple-http.component';
import { YoutubeSearchComponent } from './youtube-search/youtube-search.component';
import { SearchBoxComponent } from './youtube-search/components/search-box/search-box.component';
import { SearchResultComponent } from './youtube-search/components/search-result/search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleHttpComponent,
    YoutubeSearchComponent,
    SearchBoxComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    YoutubeApiServiceInjectables
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
