import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTablaochoComponent } from './listar-tablaocho.component';

describe('ListarTablaochoComponent', () => {
  let component: ListarTablaochoComponent;
  let fixture: ComponentFixture<ListarTablaochoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTablaochoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTablaochoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
