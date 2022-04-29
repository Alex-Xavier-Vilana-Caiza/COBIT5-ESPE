import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo12tabla4Component } from './apo12tabla4.component';

describe('Apo12tabla4Component', () => {
  let component: Apo12tabla4Component;
  let fixture: ComponentFixture<Apo12tabla4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo12tabla4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo12tabla4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
