import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina166Component } from './pagina166.component';

describe('Pagina166Component', () => {
  let component: Pagina166Component;
  let fixture: ComponentFixture<Pagina166Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagina166Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina166Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
