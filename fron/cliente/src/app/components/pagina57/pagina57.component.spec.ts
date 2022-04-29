import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina57Component } from './pagina57.component';

describe('Pagina57Component', () => {
  let component: Pagina57Component;
  let fixture: ComponentFixture<Pagina57Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagina57Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina57Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
