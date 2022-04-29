import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo9tabla1Component } from './apo9tabla1.component';

describe('Apo9tabla1Component', () => {
  let component: Apo9tabla1Component;
  let fixture: ComponentFixture<Apo9tabla1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo9tabla1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo9tabla1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
