import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HearoSearchComponent } from './hearo-search.component';

describe('HearoSearchComponent', () => {
  let component: HearoSearchComponent;
  let fixture: ComponentFixture<HearoSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HearoSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HearoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
