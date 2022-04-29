import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Edm02tabla2Component } from './edm02tabla2.component';

describe('Edm02tabla2Component', () => {
  let component: Edm02tabla2Component;
  let fixture: ComponentFixture<Edm02tabla2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Edm02tabla2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Edm02tabla2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
