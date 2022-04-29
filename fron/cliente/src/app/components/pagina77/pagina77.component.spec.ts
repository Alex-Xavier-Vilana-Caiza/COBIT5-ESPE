import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina77Component } from './pagina77.component';

describe('Pagina77Component', () => {
  let component: Pagina77Component;
  let fixture: ComponentFixture<Pagina77Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagina77Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina77Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
