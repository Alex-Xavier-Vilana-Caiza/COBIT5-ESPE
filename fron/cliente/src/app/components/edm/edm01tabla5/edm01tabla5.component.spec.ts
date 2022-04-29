import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Edm01tabla5Component } from './edm01tabla5.component';

describe('Edm01tabla5Component', () => {
  let component: Edm01tabla5Component;
  let fixture: ComponentFixture<Edm01tabla5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Edm01tabla5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Edm01tabla5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
