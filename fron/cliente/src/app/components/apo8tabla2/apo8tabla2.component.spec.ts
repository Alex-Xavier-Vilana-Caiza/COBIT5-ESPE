import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo8tabla2Component } from './apo8tabla2.component';

describe('Apo8tabla2Component', () => {
  let component: Apo8tabla2Component;
  let fixture: ComponentFixture<Apo8tabla2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo8tabla2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo8tabla2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
