import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Edm03tabla4Component } from './edm03tabla4.component';

describe('Edm03tabla4Component', () => {
  let component: Edm03tabla4Component;
  let fixture: ComponentFixture<Edm03tabla4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Edm03tabla4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Edm03tabla4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
