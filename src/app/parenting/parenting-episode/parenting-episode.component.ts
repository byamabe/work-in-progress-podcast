import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Episode } from '../../models/episode.model';
import { data } from '../../data/parenting';

@Component({
  selector: 'app-parenting-episode',
  templateUrl: './parenting-episode.component.html',
  styleUrls: ['./parenting-episode.component.css']
})
export class ParentingEpisodeComponent implements OnInit {
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
