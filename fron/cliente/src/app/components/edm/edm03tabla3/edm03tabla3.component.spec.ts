import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Edm03tabla3Component } from './edm03tabla3.component';

describe('Edm03tabla3Component', () => {
  let component: Edm03tabla3Component;
  let fixture: ComponentFixture<Edm03tabla3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Edm03tabla3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Edm03tabla3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
