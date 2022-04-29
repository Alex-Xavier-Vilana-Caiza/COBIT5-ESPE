import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina55Component } from './pagina55.component';

describe('Pagina55Component', () => {
  let component: Pagina55Component;
  let fixture: ComponentFixture<Pagina55Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagina55Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina55Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
