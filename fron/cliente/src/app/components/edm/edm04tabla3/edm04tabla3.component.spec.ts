import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Edm04tabla3Component } from './edm04tabla3.component';

describe('Edm04tabla3Component', () => {
  let component: Edm04tabla3Component;
  let fixture: ComponentFixture<Edm04tabla3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Edm04tabla3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Edm04tabla3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
