import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCabecerab10Component } from './crear-cabecerab10.component';

describe('CrearCabecerab10Component', () => {
  let component: CrearCabecerab10Component;
  let fixture: ComponentFixture<CrearCabecerab10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearCabecerab10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCabecerab10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
