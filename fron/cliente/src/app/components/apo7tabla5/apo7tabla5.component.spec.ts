import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo7tabla5Component } from './apo7tabla5.component';

describe('Apo7tabla5Component', () => {
  let component: Apo7tabla5Component;
  let fixture: ComponentFixture<Apo7tabla5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo7tabla5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo7tabla5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
