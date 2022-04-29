import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTablasieteComponent } from './crear-tablasiete.component';

describe('CrearTablasieteComponent', () => {
  let component: CrearTablasieteComponent;
  let fixture: ComponentFixture<CrearTablasieteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTablasieteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTablasieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
