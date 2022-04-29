import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina143Component } from './pagina143.component';

describe('Pagina143Component', () => {
  let component: Pagina143Component;
  let fixture: ComponentFixture<Pagina143Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagina143Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina143Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
