import { Component, OnInit } from '@angular/core';
import { Episode } from '../models/episode.model';

@Component({
  selector: 'app-parenting',
  templateUrl: './parenting.component.html',
  styleUrls: ['./parenting.component.css']
})
export class ParentingComponent implements OnInit {
  episodeId: string;
  episode: Episode;

  constructor() { }

  ngOnInit() {
  }

}
