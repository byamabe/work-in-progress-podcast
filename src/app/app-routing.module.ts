import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PodcastComponent } from './podcast/podcast.component';
import { EpisodesComponent } from './episode/episodes/episodes.component';
import { EpisodeComponent } from './episode/episode.component';
import { ParentingComponent } from './parenting/parenting.component';
import { ParentingEpisodeComponent } from './parenting/parenting-episode/parenting-episode.component';

const publicRoutes: Routes = [
  { path: '', redirectTo: '/podcast', pathMatch: 'full', },
  { path: 'podcast', component: PodcastComponent, },
  { path: 'episodes', component: EpisodesComponent, },
  { path: 'episode/:id', component: EpisodeComponent, },
  { path: 'parenting', component: ParentingComponent, },
  { path: 'parenting/:id', component: ParentingEpisodeComponent, },
];

const routes: Routes = [
  {
    path: '',
    children: [
      ...publicRoutes
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
