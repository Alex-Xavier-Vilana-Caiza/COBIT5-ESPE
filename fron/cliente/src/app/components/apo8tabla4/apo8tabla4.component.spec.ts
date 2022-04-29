import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo8tabla4Component } from './apo8tabla4.component';

describe('Apo8tabla4Component', () => {
  let component: Apo8tabla4Component;
  let fixture: ComponentFixture<Apo8tabla4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo8tabla4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo8tabla4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
