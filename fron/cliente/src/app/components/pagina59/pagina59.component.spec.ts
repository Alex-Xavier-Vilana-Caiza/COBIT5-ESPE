import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina59Component } from './pagina59.component';

describe('Pagina59Component', () => {
  let component: Pagina59Component;
  let fixture: ComponentFixture<Pagina59Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagina59Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina59Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
