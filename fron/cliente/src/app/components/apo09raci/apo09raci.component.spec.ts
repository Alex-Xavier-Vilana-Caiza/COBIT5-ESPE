import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo09raciComponent } from './apo09raci.component';

describe('Apo09raciComponent', () => {
  let component: Apo09raciComponent;
  let fixture: ComponentFixture<Apo09raciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo09raciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo09raciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
