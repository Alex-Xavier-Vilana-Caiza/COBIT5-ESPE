import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo04casillaComponent } from './apo04casilla.component';

describe('Apo04casillaComponent', () => {
  let component: Apo04casillaComponent;
  let fixture: ComponentFixture<Apo04casillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo04casillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo04casillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
