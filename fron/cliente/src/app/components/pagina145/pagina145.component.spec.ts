import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina145Component } from './pagina145.component';

describe('Pagina145Component', () => {
  let component: Pagina145Component;
  let fixture: ComponentFixture<Pagina145Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagina145Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina145Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
