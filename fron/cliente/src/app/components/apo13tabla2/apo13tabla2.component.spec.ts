import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo13tabla2Component } from './apo13tabla2.component';

describe('Apo13tabla2Component', () => {
  let component: Apo13tabla2Component;
  let fixture: ComponentFixture<Apo13tabla2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo13tabla2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo13tabla2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
