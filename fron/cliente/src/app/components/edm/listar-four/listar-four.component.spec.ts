import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarFourComponent } from './listar-four.component';

describe('ListarFourComponent', () => {
  let component: ListarFourComponent;
  let fixture: ComponentFixture<ListarFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
