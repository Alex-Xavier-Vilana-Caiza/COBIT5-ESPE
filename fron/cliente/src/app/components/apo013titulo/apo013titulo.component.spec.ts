import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo013tituloComponent } from './apo013titulo.component';

describe('Apo013tituloComponent', () => {
  let component: Apo013tituloComponent;
  let fixture: ComponentFixture<Apo013tituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo013tituloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo013tituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
