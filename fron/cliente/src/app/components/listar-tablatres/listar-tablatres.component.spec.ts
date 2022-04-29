import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTablatresComponent } from './listar-tablatres.component';

describe('ListarTablatresComponent', () => {
  let component: ListarTablatresComponent;
  let fixture: ComponentFixture<ListarTablatresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTablatresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTablatresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
