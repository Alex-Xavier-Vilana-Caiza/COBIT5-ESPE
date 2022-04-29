import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearHead4Component } from './crear-head4.component';

describe('CrearHead4Component', () => {
  let component: CrearHead4Component;
  let fixture: ComponentFixture<CrearHead4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearHead4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearHead4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
