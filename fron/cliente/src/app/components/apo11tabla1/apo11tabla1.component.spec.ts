import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo11tabla1Component } from './apo11tabla1.component';

describe('Apo11tabla1Component', () => {
  let component: Apo11tabla1Component;
  let fixture: ComponentFixture<Apo11tabla1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo11tabla1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo11tabla1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
