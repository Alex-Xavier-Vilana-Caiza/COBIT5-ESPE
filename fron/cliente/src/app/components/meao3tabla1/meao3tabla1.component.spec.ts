import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Meao3tabla1Component } from './meao3tabla1.component';

describe('Meao3tabla1Component', () => {
  let component: Meao3tabla1Component;
  let fixture: ComponentFixture<Meao3tabla1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Meao3tabla1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Meao3tabla1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
