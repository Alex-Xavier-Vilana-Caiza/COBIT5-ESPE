import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina134Component } from './pagina134.component';

describe('Pagina134Component', () => {
  let component: Pagina134Component;
  let fixture: ComponentFixture<Pagina134Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagina134Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina134Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
