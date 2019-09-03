import { Component, OnInit } from '@angular/core';
import { PlyrComponent } from 'ngx-plyr';
import Plyr from 'plyr';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {

  plyr: PlyrComponent;
  player: Plyr;

  constructor() { }

  ngOnInit() {
  }

}
