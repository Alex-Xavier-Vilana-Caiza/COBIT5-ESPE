import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina52Component } from './pagina52.component';

describe('Pagina52Component', () => {
  let component: Pagina52Component;
  let fixture: ComponentFixture<Pagina52Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagina52Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina52Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
