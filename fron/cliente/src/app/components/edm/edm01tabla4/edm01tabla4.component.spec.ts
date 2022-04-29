import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Edm01tabla4Component } from './edm01tabla4.component';

describe('Edm01tabla4Component', () => {
  let component: Edm01tabla4Component;
  let fixture: ComponentFixture<Edm01tabla4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Edm01tabla4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Edm01tabla4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
