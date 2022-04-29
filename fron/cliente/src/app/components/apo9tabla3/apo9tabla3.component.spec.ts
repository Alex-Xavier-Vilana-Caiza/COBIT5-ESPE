import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo9tabla3Component } from './apo9tabla3.component';

describe('Apo9tabla3Component', () => {
  let component: Apo9tabla3Component;
  let fixture: ComponentFixture<Apo9tabla3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo9tabla3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo9tabla3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
