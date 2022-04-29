import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCabeceraxComponent } from './crear-cabecerax.component';

describe('CrearCabeceraxComponent', () => {
  let component: CrearCabeceraxComponent;
  let fixture: ComponentFixture<CrearCabeceraxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearCabeceraxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCabeceraxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
