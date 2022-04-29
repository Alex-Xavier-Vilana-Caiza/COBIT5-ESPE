import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina75Component } from './pagina75.component';

describe('Pagina75Component', () => {
  let component: Pagina75Component;
  let fixture: ComponentFixture<Pagina75Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagina75Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina75Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
