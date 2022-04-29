import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina56Component } from './pagina56.component';

describe('Pagina56Component', () => {
  let component: Pagina56Component;
  let fixture: ComponentFixture<Pagina56Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagina56Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina56Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
