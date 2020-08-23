import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllindianewsComponent } from './allindianews.component';

describe('AllindianewsComponent', () => {
  let component: AllindianewsComponent;
  let fixture: ComponentFixture<AllindianewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllindianewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllindianewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
