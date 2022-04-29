import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarRacicuatroComponent } from './listar-racicuatro.component';

describe('ListarRacicuatroComponent', () => {
  let component: ListarRacicuatroComponent;
  let fixture: ComponentFixture<ListarRacicuatroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarRacicuatroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarRacicuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
