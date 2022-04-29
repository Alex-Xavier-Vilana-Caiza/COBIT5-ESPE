import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo09tituloComponent } from './apo09titulo.component';

describe('Apo09tituloComponent', () => {
  let component: Apo09tituloComponent;
  let fixture: ComponentFixture<Apo09tituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo09tituloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo09tituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
