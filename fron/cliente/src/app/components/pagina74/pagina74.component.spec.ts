import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina74Component } from './pagina74.component';

describe('Pagina74Component', () => {
  let component: Pagina74Component;
  let fixture: ComponentFixture<Pagina74Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagina74Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina74Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
