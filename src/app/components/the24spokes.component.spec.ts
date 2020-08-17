import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { The24spokesComponent } from './the24spokes.component';

describe('The24spokesComponent', () => {
  let component: The24spokesComponent;
  let fixture: ComponentFixture<The24spokesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ The24spokesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(The24spokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
