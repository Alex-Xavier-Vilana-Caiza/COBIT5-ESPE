import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina167Component } from './pagina167.component';

describe('Pagina167Component', () => {
  let component: Pagina167Component;
  let fixture: ComponentFixture<Pagina167Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagina167Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina167Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
