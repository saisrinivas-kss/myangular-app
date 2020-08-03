import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Covid19infoComponent } from './covid-19info.component';

describe('Covid19infoComponent', () => {
  let component: Covid19infoComponent;
  let fixture: ComponentFixture<Covid19infoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Covid19infoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Covid19infoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
