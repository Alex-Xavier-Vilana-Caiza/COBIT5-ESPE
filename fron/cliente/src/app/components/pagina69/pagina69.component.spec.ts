import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina69Component } from './pagina69.component';

describe('Pagina69Component', () => {
  let component: Pagina69Component;
  let fixture: ComponentFixture<Pagina69Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagina69Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina69Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
