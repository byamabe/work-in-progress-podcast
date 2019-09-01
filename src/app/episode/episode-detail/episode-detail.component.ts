import { Component, Input, OnInit } from '@angular/core';
import { Episode } from '../../models/episode.model';

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrls: ['./episode-detail.component.css']
})
export class EpisodeDetailComponent implements OnInit {
  @Input() episode: Episode;

  constructor() { }

  ngOnInit() {
  }

}
