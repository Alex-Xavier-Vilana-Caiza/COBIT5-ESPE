import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina168Component } from './pagina168.component';

describe('Pagina168Component', () => {
  let component: Pagina168Component;
  let fixture: ComponentFixture<Pagina168Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagina168Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina168Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
