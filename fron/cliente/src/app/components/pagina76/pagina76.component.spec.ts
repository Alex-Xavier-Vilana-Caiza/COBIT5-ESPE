import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina76Component } from './pagina76.component';

describe('Pagina76Component', () => {
  let component: Pagina76Component;
  let fixture: ComponentFixture<Pagina76Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagina76Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina76Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
