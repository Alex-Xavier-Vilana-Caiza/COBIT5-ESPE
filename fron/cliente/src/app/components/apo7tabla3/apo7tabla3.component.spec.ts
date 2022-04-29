import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo7tabla3Component } from './apo7tabla3.component';

describe('Apo7tabla3Component', () => {
  let component: Apo7tabla3Component;
  let fixture: ComponentFixture<Apo7tabla3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo7tabla3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo7tabla3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
