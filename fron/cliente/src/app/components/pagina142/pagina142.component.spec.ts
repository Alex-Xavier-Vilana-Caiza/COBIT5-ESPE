import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina142Component } from './pagina142.component';

describe('Pagina142Component', () => {
  let component: Pagina142Component;
  let fixture: ComponentFixture<Pagina142Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagina142Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina142Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
