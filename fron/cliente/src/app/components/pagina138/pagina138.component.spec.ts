import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina138Component } from './pagina138.component';

describe('Pagina138Component', () => {
  let component: Pagina138Component;
  let fixture: ComponentFixture<Pagina138Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagina138Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina138Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
