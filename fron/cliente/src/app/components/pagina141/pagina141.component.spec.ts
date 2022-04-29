import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina141Component } from './pagina141.component';

describe('Pagina141Component', () => {
  let component: Pagina141Component;
  let fixture: ComponentFixture<Pagina141Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagina141Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina141Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
