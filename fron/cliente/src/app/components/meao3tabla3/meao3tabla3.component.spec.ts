import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Meao3tabla3Component } from './meao3tabla3.component';

describe('Meao3tabla3Component', () => {
  let component: Meao3tabla3Component;
  let fixture: ComponentFixture<Meao3tabla3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Meao3tabla3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Meao3tabla3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
