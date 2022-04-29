import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo11tabla3Component } from './apo11tabla3.component';

describe('Apo11tabla3Component', () => {
  let component: Apo11tabla3Component;
  let fixture: ComponentFixture<Apo11tabla3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo11tabla3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo11tabla3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
