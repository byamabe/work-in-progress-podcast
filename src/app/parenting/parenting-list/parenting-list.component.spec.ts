import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentingListComponent } from './parenting-list.component';

describe('ParentingListComponent', () => {
  let component: ParentingListComponent;
  let fixture: ComponentFixture<ParentingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
