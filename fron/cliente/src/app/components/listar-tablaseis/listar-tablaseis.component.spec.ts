import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTablaseisComponent } from './listar-tablaseis.component';

describe('ListarTablaseisComponent', () => {
  let component: ListarTablaseisComponent;
  let fixture: ComponentFixture<ListarTablaseisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTablaseisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTablaseisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
