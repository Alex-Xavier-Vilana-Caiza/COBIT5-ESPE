import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Meao3tabla4Component } from './meao3tabla4.component';

describe('Meao3tabla4Component', () => {
  let component: Meao3tabla4Component;
  let fixture: ComponentFixture<Meao3tabla4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Meao3tabla4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Meao3tabla4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
