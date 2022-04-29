import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo12tabla5Component } from './apo12tabla5.component';

describe('Apo12tabla5Component', () => {
  let component: Apo12tabla5Component;
  let fixture: ComponentFixture<Apo12tabla5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo12tabla5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo12tabla5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
