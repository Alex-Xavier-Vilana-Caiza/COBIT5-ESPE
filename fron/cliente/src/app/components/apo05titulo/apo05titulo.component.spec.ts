import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo05tituloComponent } from './apo05titulo.component';

describe('Apo05tituloComponent', () => {
  let component: Apo05tituloComponent;
  let fixture: ComponentFixture<Apo05tituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo05tituloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo05tituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
