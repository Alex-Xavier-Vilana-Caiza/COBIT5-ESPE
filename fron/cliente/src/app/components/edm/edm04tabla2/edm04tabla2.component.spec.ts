import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Edm04tabla2Component } from './edm04tabla2.component';

describe('Edm04tabla2Component', () => {
  let component: Edm04tabla2Component;
  let fixture: ComponentFixture<Edm04tabla2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Edm04tabla2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Edm04tabla2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
