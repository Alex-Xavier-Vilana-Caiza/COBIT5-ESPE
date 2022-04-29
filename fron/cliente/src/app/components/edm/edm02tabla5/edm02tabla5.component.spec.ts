import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Edm02tabla5Component } from './edm02tabla5.component';

describe('Edm02tabla5Component', () => {
  let component: Edm02tabla5Component;
  let fixture: ComponentFixture<Edm02tabla5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Edm02tabla5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Edm02tabla5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
