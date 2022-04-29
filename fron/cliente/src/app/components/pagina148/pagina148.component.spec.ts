import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina148Component } from './pagina148.component';

describe('Pagina148Component', () => {
  let component: Pagina148Component;
  let fixture: ComponentFixture<Pagina148Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagina148Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina148Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
