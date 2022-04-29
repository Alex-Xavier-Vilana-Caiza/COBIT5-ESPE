import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina144Component } from './pagina144.component';

describe('Pagina144Component', () => {
  let component: Pagina144Component;
  let fixture: ComponentFixture<Pagina144Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagina144Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina144Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
