import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina63Component } from './pagina63.component';

describe('Pagina63Component', () => {
  let component: Pagina63Component;
  let fixture: ComponentFixture<Pagina63Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagina63Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina63Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
