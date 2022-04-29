import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo10tabla2Component } from './apo10tabla2.component';

describe('Apo10tabla2Component', () => {
  let component: Apo10tabla2Component;
  let fixture: ComponentFixture<Apo10tabla2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo10tabla2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo10tabla2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
