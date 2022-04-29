import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo12tabla3Component } from './apo12tabla3.component';

describe('Apo12tabla3Component', () => {
  let component: Apo12tabla3Component;
  let fixture: ComponentFixture<Apo12tabla3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo12tabla3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo12tabla3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
