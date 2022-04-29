import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo05casillaComponent } from './apo05casilla.component';

describe('Apo05casillaComponent', () => {
  let component: Apo05casillaComponent;
  let fixture: ComponentFixture<Apo05casillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo05casillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo05casillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
