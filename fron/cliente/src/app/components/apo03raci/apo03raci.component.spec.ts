import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo03raciComponent } from './apo03raci.component';

describe('Apo03raciComponent', () => {
  let component: Apo03raciComponent;
  let fixture: ComponentFixture<Apo03raciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo03raciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo03raciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
