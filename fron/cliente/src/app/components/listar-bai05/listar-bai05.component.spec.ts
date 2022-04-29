import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarBai05Component } from './listar-bai05.component';

describe('ListarBai05Component', () => {
  let component: ListarBai05Component;
  let fixture: ComponentFixture<ListarBai05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarBai05Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarBai05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
