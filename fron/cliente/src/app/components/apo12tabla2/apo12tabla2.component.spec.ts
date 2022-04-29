import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo12tabla2Component } from './apo12tabla2.component';

describe('Apo12tabla2Component', () => {
  let component: Apo12tabla2Component;
  let fixture: ComponentFixture<Apo12tabla2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo12tabla2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo12tabla2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
