import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo08casillaComponent } from './apo08casilla.component';

describe('Apo08casillaComponent', () => {
  let component: Apo08casillaComponent;
  let fixture: ComponentFixture<Apo08casillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo08casillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo08casillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
