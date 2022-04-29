import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina169Component } from './pagina169.component';

describe('Pagina169Component', () => {
  let component: Pagina169Component;
  let fixture: ComponentFixture<Pagina169Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagina169Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina169Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
