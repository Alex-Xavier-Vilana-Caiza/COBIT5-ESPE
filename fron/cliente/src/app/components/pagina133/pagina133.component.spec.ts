import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina133Component } from './pagina133.component';

describe('Pagina133Component', () => {
  let component: Pagina133Component;
  let fixture: ComponentFixture<Pagina133Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagina133Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina133Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
