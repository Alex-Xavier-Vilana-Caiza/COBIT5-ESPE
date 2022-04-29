import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo7tabla2Component } from './apo7tabla2.component';

describe('Apo7tabla2Component', () => {
  let component: Apo7tabla2Component;
  let fixture: ComponentFixture<Apo7tabla2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo7tabla2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo7tabla2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
