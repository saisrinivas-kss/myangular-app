import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidcasesComponent } from './covidcases.component';

describe('CovidcasesComponent', () => {
  let component: CovidcasesComponent;
  let fixture: ComponentFixture<CovidcasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidcasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidcasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
