import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Edm03tabla1Component } from './edm03tabla1.component';

describe('Edm03tabla1Component', () => {
  let component: Edm03tabla1Component;
  let fixture: ComponentFixture<Edm03tabla1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Edm03tabla1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Edm03tabla1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
