import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo05raciComponent } from './apo05raci.component';

describe('Apo05raciComponent', () => {
  let component: Apo05raciComponent;
  let fixture: ComponentFixture<Apo05raciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo05raciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo05raciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
