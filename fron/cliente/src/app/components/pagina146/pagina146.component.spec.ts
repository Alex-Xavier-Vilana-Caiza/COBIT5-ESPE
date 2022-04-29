import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina146Component } from './pagina146.component';

describe('Pagina146Component', () => {
  let component: Pagina146Component;
  let fixture: ComponentFixture<Pagina146Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagina146Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina146Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
