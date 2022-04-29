import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina165Component } from './pagina165.component';

describe('Pagina165Component', () => {
  let component: Pagina165Component;
  let fixture: ComponentFixture<Pagina165Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagina165Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina165Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
