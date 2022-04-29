import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearBai05Component } from './crear-bai05.component';

describe('CrearBai05Component', () => {
  let component: CrearBai05Component;
  let fixture: ComponentFixture<CrearBai05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearBai05Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearBai05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
