import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Edm05tabla3Component } from './edm05tabla3.component';

describe('Edm05tabla3Component', () => {
  let component: Edm05tabla3Component;
  let fixture: ComponentFixture<Edm05tabla3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Edm05tabla3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Edm05tabla3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
