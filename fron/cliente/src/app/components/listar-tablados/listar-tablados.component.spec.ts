import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTabladosComponent } from './listar-tablados.component';

describe('ListarTabladosComponent', () => {
  let component: ListarTabladosComponent;
  let fixture: ComponentFixture<ListarTabladosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTabladosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTabladosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
