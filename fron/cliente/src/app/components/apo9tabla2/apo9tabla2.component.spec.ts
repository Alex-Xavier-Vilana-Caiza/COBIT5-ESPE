import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo9tabla2Component } from './apo9tabla2.component';

describe('Apo9tabla2Component', () => {
  let component: Apo9tabla2Component;
  let fixture: ComponentFixture<Apo9tabla2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo9tabla2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo9tabla2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
