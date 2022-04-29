import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo13tabla3Component } from './apo13tabla3.component';

describe('Apo13tabla3Component', () => {
  let component: Apo13tabla3Component;
  let fixture: ComponentFixture<Apo13tabla3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo13tabla3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo13tabla3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
