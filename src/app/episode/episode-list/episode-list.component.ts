import { Component, OnInit } from '@angular/core';
import { Episode } from '../../models/episode.model';

import { data } from '../../data/podcasts';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.css']
})
export class EpisodeListComponent implements OnInit {
  episodes: Episode[];

  constructor() { }

  ngOnInit() {
    this.episodes = data.episodes.map((episode: any) => new Episode().deserialize(episode));
  }
}
