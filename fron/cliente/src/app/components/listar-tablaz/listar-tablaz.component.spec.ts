import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTablazComponent } from './listar-tablaz.component';

describe('ListarTablazComponent', () => {
  let component: ListarTablazComponent;
  let fixture: ComponentFixture<ListarTablazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTablazComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTablazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
