import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTabla3Component } from './crear-tabla3.component';

describe('CrearTabla3Component', () => {
  let component: CrearTabla3Component;
  let fixture: ComponentFixture<CrearTabla3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTabla3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTabla3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
