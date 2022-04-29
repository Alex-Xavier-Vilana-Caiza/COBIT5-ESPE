import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo13tabla1Component } from './apo13tabla1.component';

describe('Apo13tabla1Component', () => {
  let component: Apo13tabla1Component;
  let fixture: ComponentFixture<Apo13tabla1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo13tabla1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo13tabla1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
