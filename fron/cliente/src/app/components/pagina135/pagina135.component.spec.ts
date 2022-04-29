import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina135Component } from './pagina135.component';

describe('Pagina135Component', () => {
  let component: Pagina135Component;
  let fixture: ComponentFixture<Pagina135Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagina135Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina135Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
