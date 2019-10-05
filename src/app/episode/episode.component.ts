import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlyrComponent } from 'ngx-plyr';
import Plyr from 'plyr';
import { data } from '../data/podcasts';
import { Episode } from '../models/episode.model';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {
  episodeId: string;
  episode: Episode;

  // plyr: PlyrComponent;
  // player: Plyr;

  constructor(private route: ActivatedRoute) {
    this.episodeId = this.route.snapshot.params.id;
    // route.params.subscribe(params => {
    //   this.episodeId = params.id;
    // });

    const x = this.episodeId;

    data.episodes.forEach(episode => {
      console.log('here: ' + this.episodeId);
      console.log('episode.id: ' + episode.id);
      if (episode.id === this.episodeId) {
        this.episode = new Episode().deserialize(episode);
        return;
      }
    });

    console.log("this.episode: " + this.episode.description);
  }

  ngOnInit() {
  }

}
