import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Edm02tabla4Component } from './edm02tabla4.component';

describe('Edm02tabla4Component', () => {
  let component: Edm02tabla4Component;
  let fixture: ComponentFixture<Edm02tabla4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Edm02tabla4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Edm02tabla4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
