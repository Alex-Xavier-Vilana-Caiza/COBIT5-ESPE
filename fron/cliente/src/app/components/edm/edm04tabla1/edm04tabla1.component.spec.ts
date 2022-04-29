import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Edm04tabla1Component } from './edm04tabla1.component';

describe('Edm04tabla1Component', () => {
  let component: Edm04tabla1Component;
  let fixture: ComponentFixture<Edm04tabla1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Edm04tabla1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Edm04tabla1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
