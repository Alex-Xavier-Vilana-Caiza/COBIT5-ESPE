import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina139Component } from './pagina139.component';

describe('Pagina139Component', () => {
  let component: Pagina139Component;
  let fixture: ComponentFixture<Pagina139Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagina139Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina139Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
