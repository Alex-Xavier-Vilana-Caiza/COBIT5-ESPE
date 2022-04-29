import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Edm01tabla2Component } from './edm01tabla2.component';

describe('Edm01tabla2Component', () => {
  let component: Edm01tabla2Component;
  let fixture: ComponentFixture<Edm01tabla2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Edm01tabla2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Edm01tabla2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
