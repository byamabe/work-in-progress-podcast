import { Component, Input, OnInit } from '@angular/core';
import { Episode } from '../../models/episode.model';

@Component({
  selector: 'app-parenting-detail',
  templateUrl: './parenting-detail.component.html',
  styleUrls: ['./parenting-detail.component.css']
})
export class ParentingDetailComponent implements OnInit {
  @Input() episode: Episode;

  constructor() { }

  ngOnInit() {
  }

}
