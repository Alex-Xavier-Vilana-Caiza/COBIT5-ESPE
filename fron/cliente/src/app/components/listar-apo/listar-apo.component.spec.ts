import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarApoComponent } from './listar-apo.component';

describe('ListarApoComponent', () => {
  let component: ListarApoComponent;
  let fixture: ComponentFixture<ListarApoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarApoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarApoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
