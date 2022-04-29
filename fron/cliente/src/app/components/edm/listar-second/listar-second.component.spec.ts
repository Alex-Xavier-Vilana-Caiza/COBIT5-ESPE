import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSecondComponent } from './listar-second.component';

describe('ListarSecondComponent', () => {
  let component: ListarSecondComponent;
  let fixture: ComponentFixture<ListarSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
