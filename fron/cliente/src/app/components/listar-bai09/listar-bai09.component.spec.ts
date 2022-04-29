import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarBai09Component } from './listar-bai09.component';

describe('ListarBai09Component', () => {
  let component: ListarBai09Component;
  let fixture: ComponentFixture<ListarBai09Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarBai09Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarBai09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
