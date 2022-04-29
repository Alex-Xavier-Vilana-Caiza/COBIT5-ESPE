import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Edm05tabla2Component } from './edm05tabla2.component';

describe('Edm05tabla2Component', () => {
  let component: Edm05tabla2Component;
  let fixture: ComponentFixture<Edm05tabla2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Edm05tabla2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Edm05tabla2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
