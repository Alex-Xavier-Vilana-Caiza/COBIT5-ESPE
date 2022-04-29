import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo04tituloComponent } from './apo04titulo.component';

describe('Apo04tituloComponent', () => {
  let component: Apo04tituloComponent;
  let fixture: ComponentFixture<Apo04tituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo04tituloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo04tituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
