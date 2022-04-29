import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Edm03tabla5Component } from './edm03tabla5.component';

describe('Edm03tabla5Component', () => {
  let component: Edm03tabla5Component;
  let fixture: ComponentFixture<Edm03tabla5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Edm03tabla5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Edm03tabla5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
