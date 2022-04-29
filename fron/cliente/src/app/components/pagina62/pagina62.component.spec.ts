import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina62Component } from './pagina62.component';

describe('Pagina62Component', () => {
  let component: Pagina62Component;
  let fixture: ComponentFixture<Pagina62Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagina62Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina62Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
