import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina147Component } from './pagina147.component';

describe('Pagina147Component', () => {
  let component: Pagina147Component;
  let fixture: ComponentFixture<Pagina147Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagina147Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina147Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
