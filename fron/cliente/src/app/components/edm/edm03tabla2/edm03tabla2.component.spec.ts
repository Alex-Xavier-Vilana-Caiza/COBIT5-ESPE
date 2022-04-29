import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Edm03tabla2Component } from './edm03tabla2.component';

describe('Edm03tabla2Component', () => {
  let component: Edm03tabla2Component;
  let fixture: ComponentFixture<Edm03tabla2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Edm03tabla2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Edm03tabla2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
