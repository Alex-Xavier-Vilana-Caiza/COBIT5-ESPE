import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Edm02tabla3Component } from './edm02tabla3.component';

describe('Edm02tabla3Component', () => {
  let component: Edm02tabla3Component;
  let fixture: ComponentFixture<Edm02tabla3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Edm02tabla3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Edm02tabla3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
