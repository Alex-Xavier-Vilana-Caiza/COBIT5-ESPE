import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo7tabla1Component } from './apo7tabla1.component';

describe('Apo7tabla1Component', () => {
  let component: Apo7tabla1Component;
  let fixture: ComponentFixture<Apo7tabla1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo7tabla1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo7tabla1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
