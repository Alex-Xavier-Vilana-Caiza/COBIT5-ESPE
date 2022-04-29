import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina54Component } from './pagina54.component';

describe('Pagina54Component', () => {
  let component: Pagina54Component;
  let fixture: ComponentFixture<Pagina54Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagina54Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina54Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
