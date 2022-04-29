import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina58Component } from './pagina58.component';

describe('Pagina58Component', () => {
  let component: Pagina58Component;
  let fixture: ComponentFixture<Pagina58Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagina58Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina58Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
