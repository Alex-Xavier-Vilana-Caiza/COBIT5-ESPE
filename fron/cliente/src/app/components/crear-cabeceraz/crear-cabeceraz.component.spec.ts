import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCabecerazComponent } from './crear-cabeceraz.component';

describe('CrearCabecerazComponent', () => {
  let component: CrearCabecerazComponent;
  let fixture: ComponentFixture<CrearCabecerazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearCabecerazComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCabecerazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
