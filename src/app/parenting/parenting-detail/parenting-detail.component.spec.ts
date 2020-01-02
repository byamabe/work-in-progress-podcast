import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentingDetailComponent } from './parenting-detail.component';

describe('ParentingDetailComponent', () => {
  let component: ParentingDetailComponent;
  let fixture: ComponentFixture<ParentingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentingDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
