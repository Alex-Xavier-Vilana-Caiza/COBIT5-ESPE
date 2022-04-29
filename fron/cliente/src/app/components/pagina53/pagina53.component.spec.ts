import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina53Component } from './pagina53.component';

describe('Pagina53Component', () => {
  let component: Pagina53Component;
  let fixture: ComponentFixture<Pagina53Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagina53Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina53Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
