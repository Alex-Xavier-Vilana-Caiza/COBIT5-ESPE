import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Edm01tabla3Component } from './edm01tabla3.component';

describe('Edm01tabla3Component', () => {
  let component: Edm01tabla3Component;
  let fixture: ComponentFixture<Edm01tabla3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Edm01tabla3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Edm01tabla3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
