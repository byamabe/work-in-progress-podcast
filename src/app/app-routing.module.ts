import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PodcastComponent } from './podcast/podcast.component';

const publicRoutes: Routes = [
  { path: '', redirectTo: '/podcast', pathMatch: 'full', },
  { path: 'podcast', component: PodcastComponent, }
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
