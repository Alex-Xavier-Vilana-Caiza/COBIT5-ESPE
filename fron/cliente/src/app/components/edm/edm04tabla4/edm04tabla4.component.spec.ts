import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Edm04tabla4Component } from './edm04tabla4.component';

describe('Edm04tabla4Component', () => {
  let component: Edm04tabla4Component;
  let fixture: ComponentFixture<Edm04tabla4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Edm04tabla4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Edm04tabla4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
