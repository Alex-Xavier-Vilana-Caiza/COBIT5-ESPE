import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo09casillaComponent } from './apo09casilla.component';

describe('Apo09casillaComponent', () => {
  let component: Apo09casillaComponent;
  let fixture: ComponentFixture<Apo09casillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo09casillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo09casillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
