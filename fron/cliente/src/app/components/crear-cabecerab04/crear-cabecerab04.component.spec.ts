import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCabecerab04Component } from './crear-cabecerab04.component';

describe('CrearCabecerab04Component', () => {
  let component: CrearCabecerab04Component;
  let fixture: ComponentFixture<CrearCabecerab04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearCabecerab04Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCabecerab04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
