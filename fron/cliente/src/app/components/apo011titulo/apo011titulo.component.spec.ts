import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo011tituloComponent } from './apo011titulo.component';

describe('Apo011tituloComponent', () => {
  let component: Apo011tituloComponent;
  let fixture: ComponentFixture<Apo011tituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo011tituloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo011tituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
