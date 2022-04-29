import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Edm02tabla1Component } from './edm02tabla1.component';

describe('Edm02tabla1Component', () => {
  let component: Edm02tabla1Component;
  let fixture: ComponentFixture<Edm02tabla1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Edm02tabla1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Edm02tabla1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
