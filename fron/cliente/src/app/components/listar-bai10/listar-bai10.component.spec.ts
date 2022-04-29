import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarBai10Component } from './listar-bai10.component';

describe('ListarBai10Component', () => {
  let component: ListarBai10Component;
  let fixture: ComponentFixture<ListarBai10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarBai10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarBai10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
