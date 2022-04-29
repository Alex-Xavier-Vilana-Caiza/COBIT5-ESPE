import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo8tabla1Component } from './apo8tabla1.component';

describe('Apo8tabla1Component', () => {
  let component: Apo8tabla1Component;
  let fixture: ComponentFixture<Apo8tabla1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo8tabla1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo8tabla1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
