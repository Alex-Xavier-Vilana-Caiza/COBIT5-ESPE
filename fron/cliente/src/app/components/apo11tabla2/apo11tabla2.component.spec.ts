import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo11tabla2Component } from './apo11tabla2.component';

describe('Apo11tabla2Component', () => {
  let component: Apo11tabla2Component;
  let fixture: ComponentFixture<Apo11tabla2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo11tabla2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo11tabla2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
