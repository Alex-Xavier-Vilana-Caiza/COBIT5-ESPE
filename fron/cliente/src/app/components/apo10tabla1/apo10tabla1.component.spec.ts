import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo10tabla1Component } from './apo10tabla1.component';

describe('Apo10tabla1Component', () => {
  let component: Apo10tabla1Component;
  let fixture: ComponentFixture<Apo10tabla1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo10tabla1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo10tabla1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
