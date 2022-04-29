import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina70Component } from './pagina70.component';

describe('Pagina70Component', () => {
  let component: Pagina70Component;
  let fixture: ComponentFixture<Pagina70Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagina70Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina70Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
