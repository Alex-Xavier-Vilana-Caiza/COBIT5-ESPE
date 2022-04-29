import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina67Component } from './pagina67.component';

describe('Pagina67Component', () => {
  let component: Pagina67Component;
  let fixture: ComponentFixture<Pagina67Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagina67Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina67Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
