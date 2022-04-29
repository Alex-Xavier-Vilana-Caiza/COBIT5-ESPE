import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina136Component } from './pagina136.component';

describe('Pagina136Component', () => {
  let component: Pagina136Component;
  let fixture: ComponentFixture<Pagina136Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagina136Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina136Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
