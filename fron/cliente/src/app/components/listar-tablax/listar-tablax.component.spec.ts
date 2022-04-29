import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTablaxComponent } from './listar-tablax.component';

describe('ListarTablaxComponent', () => {
  let component: ListarTablaxComponent;
  let fixture: ComponentFixture<ListarTablaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTablaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTablaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
