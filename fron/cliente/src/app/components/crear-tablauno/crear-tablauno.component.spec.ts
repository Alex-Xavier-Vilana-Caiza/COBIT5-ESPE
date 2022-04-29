import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTablaunoComponent } from './crear-tablauno.component';

describe('CrearTablaunoComponent', () => {
  let component: CrearTablaunoComponent;
  let fixture: ComponentFixture<CrearTablaunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTablaunoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTablaunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
