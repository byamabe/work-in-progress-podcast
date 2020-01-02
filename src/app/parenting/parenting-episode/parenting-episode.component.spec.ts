import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentingEpisodeComponent } from './parenting-episode.component';

describe('ParentingEpisodeComponent', () => {
  let component: ParentingEpisodeComponent;
  let fixture: ComponentFixture<ParentingEpisodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentingEpisodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentingEpisodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
