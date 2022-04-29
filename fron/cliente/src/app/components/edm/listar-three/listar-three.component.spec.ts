import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarThreeComponent } from './listar-three.component';

describe('ListarThreeComponent', () => {
  let component: ListarThreeComponent;
  let fixture: ComponentFixture<ListarThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
