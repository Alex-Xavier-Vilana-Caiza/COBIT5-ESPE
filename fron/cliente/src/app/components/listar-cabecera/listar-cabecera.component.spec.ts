import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCabeceraComponent } from './listar-cabecera.component';

describe('ListarCabeceraComponent', () => {
  let component: ListarCabeceraComponent;
  let fixture: ComponentFixture<ListarCabeceraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarCabeceraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCabeceraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
