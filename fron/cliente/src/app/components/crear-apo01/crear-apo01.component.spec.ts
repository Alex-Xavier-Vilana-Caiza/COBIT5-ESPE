import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearApo01Component } from './crear-apo01.component';

describe('CrearApo01Component', () => {
  let component: CrearApo01Component;
  let fixture: ComponentFixture<CrearApo01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearApo01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearApo01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
