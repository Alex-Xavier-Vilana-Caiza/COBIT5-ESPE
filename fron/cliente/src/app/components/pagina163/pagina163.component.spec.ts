import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina163Component } from './pagina163.component';

describe('Pagina163Component', () => {
  let component: Pagina163Component;
  let fixture: ComponentFixture<Pagina163Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagina163Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina163Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
