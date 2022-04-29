import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo11tabla5Component } from './apo11tabla5.component';

describe('Apo11tabla5Component', () => {
  let component: Apo11tabla5Component;
  let fixture: ComponentFixture<Apo11tabla5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo11tabla5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo11tabla5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
