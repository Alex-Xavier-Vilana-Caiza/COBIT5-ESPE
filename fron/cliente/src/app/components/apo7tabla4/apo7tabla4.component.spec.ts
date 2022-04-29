import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo7tabla4Component } from './apo7tabla4.component';

describe('Apo7tabla4Component', () => {
  let component: Apo7tabla4Component;
  let fixture: ComponentFixture<Apo7tabla4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo7tabla4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo7tabla4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
