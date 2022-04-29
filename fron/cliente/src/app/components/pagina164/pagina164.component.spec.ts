import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina164Component } from './pagina164.component';

describe('Pagina164Component', () => {
  let component: Pagina164Component;
  let fixture: ComponentFixture<Pagina164Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagina164Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina164Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
