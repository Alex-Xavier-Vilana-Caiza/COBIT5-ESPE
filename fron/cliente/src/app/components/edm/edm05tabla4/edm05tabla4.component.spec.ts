import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Edm05tabla4Component } from './edm05tabla4.component';

describe('Edm05tabla4Component', () => {
  let component: Edm05tabla4Component;
  let fixture: ComponentFixture<Edm05tabla4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Edm05tabla4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Edm05tabla4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
