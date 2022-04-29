import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Meao3tabla2Component } from './meao3tabla2.component';

describe('Meao3tabla2Component', () => {
  let component: Meao3tabla2Component;
  let fixture: ComponentFixture<Meao3tabla2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Meao3tabla2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Meao3tabla2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
