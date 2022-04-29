import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearHead3Component } from './crear-head3.component';

describe('CrearHead3Component', () => {
  let component: CrearHead3Component;
  let fixture: ComponentFixture<CrearHead3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearHead3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearHead3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
