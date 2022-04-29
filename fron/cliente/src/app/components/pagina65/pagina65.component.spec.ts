import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina65Component } from './pagina65.component';

describe('Pagina65Component', () => {
  let component: Pagina65Component;
  let fixture: ComponentFixture<Pagina65Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagina65Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina65Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
