import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo08tituloComponent } from './apo08titulo.component';

describe('Apo08tituloComponent', () => {
  let component: Apo08tituloComponent;
  let fixture: ComponentFixture<Apo08tituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo08tituloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo08tituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
