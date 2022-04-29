import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTablaunoComponent } from './listar-tablauno.component';

describe('ListarTablaunoComponent', () => {
  let component: ListarTablaunoComponent;
  let fixture: ComponentFixture<ListarTablaunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTablaunoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTablaunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
