import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo08raciComponent } from './apo08raci.component';

describe('Apo08raciComponent', () => {
  let component: Apo08raciComponent;
  let fixture: ComponentFixture<Apo08raciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo08raciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo08raciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
