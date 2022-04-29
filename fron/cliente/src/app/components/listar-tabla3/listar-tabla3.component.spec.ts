import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTabla3Component } from './listar-tabla3.component';

describe('ListarTabla3Component', () => {
  let component: ListarTabla3Component;
  let fixture: ComponentFixture<ListarTabla3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTabla3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTabla3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
