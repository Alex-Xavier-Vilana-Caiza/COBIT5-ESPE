import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo013raciComponent } from './apo013raci.component';

describe('Apo013raciComponent', () => {
  let component: Apo013raciComponent;
  let fixture: ComponentFixture<Apo013raciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo013raciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo013raciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
