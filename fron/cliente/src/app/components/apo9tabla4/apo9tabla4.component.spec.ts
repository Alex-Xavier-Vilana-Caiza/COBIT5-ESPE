import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo9tabla4Component } from './apo9tabla4.component';

describe('Apo9tabla4Component', () => {
  let component: Apo9tabla4Component;
  let fixture: ComponentFixture<Apo9tabla4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo9tabla4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo9tabla4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
