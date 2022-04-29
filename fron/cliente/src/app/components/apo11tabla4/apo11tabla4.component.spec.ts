import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo11tabla4Component } from './apo11tabla4.component';

describe('Apo11tabla4Component', () => {
  let component: Apo11tabla4Component;
  let fixture: ComponentFixture<Apo11tabla4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo11tabla4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo11tabla4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
