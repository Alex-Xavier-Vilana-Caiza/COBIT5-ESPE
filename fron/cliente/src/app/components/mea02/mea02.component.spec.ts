import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mea02Component } from './mea02.component';

describe('Mea02Component', () => {
  let component: Mea02Component;
  let fixture: ComponentFixture<Mea02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mea02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mea02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
