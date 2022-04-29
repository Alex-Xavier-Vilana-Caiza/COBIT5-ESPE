import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Edm01tabla1Component } from './edm01tabla1.component';

describe('Edm01tabla1Component', () => {
  let component: Edm01tabla1Component;
  let fixture: ComponentFixture<Edm01tabla1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Edm01tabla1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Edm01tabla1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
