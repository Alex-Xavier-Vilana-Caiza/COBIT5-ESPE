import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina64Component } from './pagina64.component';

describe('Pagina64Component', () => {
  let component: Pagina64Component;
  let fixture: ComponentFixture<Pagina64Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagina64Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina64Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
