import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCabecerab03Component } from './crear-cabecerab03.component';

describe('CrearCabecerab03Component', () => {
  let component: CrearCabecerab03Component;
  let fixture: ComponentFixture<CrearCabecerab03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearCabecerab03Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCabecerab03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
