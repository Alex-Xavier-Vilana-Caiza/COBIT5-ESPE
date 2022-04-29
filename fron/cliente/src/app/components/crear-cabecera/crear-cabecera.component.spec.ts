import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCabeceraComponent } from './crear-cabecera.component';

describe('CrearCabeceraComponent', () => {
  let component: CrearCabeceraComponent;
  let fixture: ComponentFixture<CrearCabeceraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearCabeceraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCabeceraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
