import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo011casillaComponent } from './apo011casilla.component';

describe('Apo011casillaComponent', () => {
  let component: Apo011casillaComponent;
  let fixture: ComponentFixture<Apo011casillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo011casillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo011casillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
