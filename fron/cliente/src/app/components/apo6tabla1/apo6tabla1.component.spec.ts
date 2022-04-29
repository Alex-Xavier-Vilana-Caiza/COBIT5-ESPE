import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo6tabla1Component } from './apo6tabla1.component';

describe('Apo6tabla1Component', () => {
  let component: Apo6tabla1Component;
  let fixture: ComponentFixture<Apo6tabla1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo6tabla1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo6tabla1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
