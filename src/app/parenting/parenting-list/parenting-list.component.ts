import { Component, OnInit } from '@angular/core';
import { Episode } from '../../models/episode.model';

import { data } from '../../data/parenting';

@Component({
  selector: 'app-parenting-list',
  templateUrl: './parenting-list.component.html',
  styleUrls: ['./parenting-list.component.css']
})
export class ParentingListComponent implements OnInit {
  episodes: Episode[];

  constructor() { }

  ngOnInit() {
    console.log('this.episodes:!!!!!! ');
    this.episodes = data.episodes.map((episode: any) => new Episode().deserialize(episode));

    console.log('this.episodes: ' + this.episodes);
  }

}
