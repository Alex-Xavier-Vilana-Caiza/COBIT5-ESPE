import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina60Component } from './pagina60.component';

describe('Pagina60Component', () => {
  let component: Pagina60Component;
  let fixture: ComponentFixture<Pagina60Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagina60Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina60Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
