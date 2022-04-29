import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina72Component } from './pagina72.component';

describe('Pagina72Component', () => {
  let component: Pagina72Component;
  let fixture: ComponentFixture<Pagina72Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagina72Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina72Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
