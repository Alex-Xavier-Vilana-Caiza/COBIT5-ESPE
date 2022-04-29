import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTablasieteComponent } from './listar-tablasiete.component';

describe('ListarTablasieteComponent', () => {
  let component: ListarTablasieteComponent;
  let fixture: ComponentFixture<ListarTablasieteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTablasieteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTablasieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
