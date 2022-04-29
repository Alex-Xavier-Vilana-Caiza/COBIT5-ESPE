import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo10tabla3Component } from './apo10tabla3.component';

describe('Apo10tabla3Component', () => {
  let component: Apo10tabla3Component;
  let fixture: ComponentFixture<Apo10tabla3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo10tabla3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo10tabla3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
