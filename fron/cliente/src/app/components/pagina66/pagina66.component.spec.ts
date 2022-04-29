import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina66Component } from './pagina66.component';

describe('Pagina66Component', () => {
  let component: Pagina66Component;
  let fixture: ComponentFixture<Pagina66Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagina66Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina66Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
