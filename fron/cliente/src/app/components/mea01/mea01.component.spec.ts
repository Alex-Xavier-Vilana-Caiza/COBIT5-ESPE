import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mea01Component } from './mea01.component';

describe('Mea01Component', () => {
  let component: Mea01Component;
  let fixture: ComponentFixture<Mea01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mea01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mea01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
