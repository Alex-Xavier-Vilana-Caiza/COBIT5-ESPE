import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo03tituloComponent } from './apo03titulo.component';

describe('Apo03tituloComponent', () => {
  let component: Apo03tituloComponent;
  let fixture: ComponentFixture<Apo03tituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo03tituloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo03tituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
