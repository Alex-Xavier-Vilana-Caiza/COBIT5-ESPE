import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina71Component } from './pagina71.component';

describe('Pagina71Component', () => {
  let component: Pagina71Component;
  let fixture: ComponentFixture<Pagina71Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagina71Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina71Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
