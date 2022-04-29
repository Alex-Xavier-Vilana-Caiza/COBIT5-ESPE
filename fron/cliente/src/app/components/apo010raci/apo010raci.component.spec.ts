import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo010raciComponent } from './apo010raci.component';

describe('Apo010raciComponent', () => {
  let component: Apo010raciComponent;
  let fixture: ComponentFixture<Apo010raciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo010raciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo010raciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
