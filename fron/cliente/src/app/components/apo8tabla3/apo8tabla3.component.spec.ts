import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo8tabla3Component } from './apo8tabla3.component';

describe('Apo8tabla3Component', () => {
  let component: Apo8tabla3Component;
  let fixture: ComponentFixture<Apo8tabla3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo8tabla3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo8tabla3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
