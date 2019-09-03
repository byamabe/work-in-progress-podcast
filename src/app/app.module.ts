import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';

import { PlyrModule } from 'ngx-plyr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PodcastComponent } from './podcast/podcast.component';
import { EpisodeComponent } from './episode/episode.component';
import { EpisodeListComponent } from './episode/episode-list/episode-list.component';
import { EpisodeDetailComponent } from './episode/episode-detail/episode-detail.component';
import { EpisodesComponent } from './episode/episodes/episodes.component';

@NgModule({
  declarations: [
    AppComponent,
    PodcastComponent,
    EpisodeComponent,
    EpisodeListComponent,
    EpisodeDetailComponent,
    EpisodesComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatToolbarModule,
    AppRoutingModule,
    FlexLayoutModule,
    PlyrModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
