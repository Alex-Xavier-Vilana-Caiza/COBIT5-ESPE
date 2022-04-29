import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCabecerab09Component } from './crear-cabecerab09.component';

describe('CrearCabecerab09Component', () => {
  let component: CrearCabecerab09Component;
  let fixture: ComponentFixture<CrearCabecerab09Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearCabecerab09Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCabecerab09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
