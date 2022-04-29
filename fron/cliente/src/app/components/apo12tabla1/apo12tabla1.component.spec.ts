import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo12tabla1Component } from './apo12tabla1.component';

describe('Apo12tabla1Component', () => {
  let component: Apo12tabla1Component;
  let fixture: ComponentFixture<Apo12tabla1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo12tabla1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo12tabla1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
