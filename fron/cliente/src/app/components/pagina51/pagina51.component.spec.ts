import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina51Component } from './pagina51.component';

describe('Pagina51Component', () => {
  let component: Pagina51Component;
  let fixture: ComponentFixture<Pagina51Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagina51Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina51Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
