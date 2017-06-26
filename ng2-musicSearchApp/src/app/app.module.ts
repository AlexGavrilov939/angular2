import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy, APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import {SpotifyService} from './services/SpotifyService';

import {AppComponent} from './app.component';
import {SearchComponent} from './components/search/search.component';
import {ArtistComponent} from './components/artist/artist.component';
import {AlbumComponent} from './components/album/album.component';
import {TrackComponent} from './components/track/track.component';

const routes: Routes = [
  { path: 'search', component: AppComponent },
  { path: 'artists/:id', component: AppComponent },
  { path: 'albums/:id', component: AppComponent },
  { path: 'tracks/:id', component: AppComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ArtistComponent,
    AlbumComponent,
    TrackComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
