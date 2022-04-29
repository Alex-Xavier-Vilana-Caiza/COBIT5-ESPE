import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCabecerab05Component } from './crear-cabecerab05.component';

describe('CrearCabecerab05Component', () => {
  let component: CrearCabecerab05Component;
  let fixture: ComponentFixture<CrearCabecerab05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearCabecerab05Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCabecerab05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
