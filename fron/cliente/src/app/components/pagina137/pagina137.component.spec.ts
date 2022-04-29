import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina137Component } from './pagina137.component';

describe('Pagina137Component', () => {
  let component: Pagina137Component;
  let fixture: ComponentFixture<Pagina137Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagina137Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina137Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
