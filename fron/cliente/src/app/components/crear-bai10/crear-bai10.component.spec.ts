import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearBai10Component } from './crear-bai10.component';

describe('CrearBai10Component', () => {
  let component: CrearBai10Component;
  let fixture: ComponentFixture<CrearBai10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearBai10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearBai10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
