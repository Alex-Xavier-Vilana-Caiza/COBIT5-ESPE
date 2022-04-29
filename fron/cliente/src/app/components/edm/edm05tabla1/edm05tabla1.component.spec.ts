import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Edm05tabla1Component } from './edm05tabla1.component';

describe('Edm05tabla1Component', () => {
  let component: Edm05tabla1Component;
  let fixture: ComponentFixture<Edm05tabla1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Edm05tabla1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Edm05tabla1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
