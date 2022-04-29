import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina61Component } from './pagina61.component';

describe('Pagina61Component', () => {
  let component: Pagina61Component;
  let fixture: ComponentFixture<Pagina61Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagina61Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina61Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
