import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina73Component } from './pagina73.component';

describe('Pagina73Component', () => {
  let component: Pagina73Component;
  let fixture: ComponentFixture<Pagina73Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagina73Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina73Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
