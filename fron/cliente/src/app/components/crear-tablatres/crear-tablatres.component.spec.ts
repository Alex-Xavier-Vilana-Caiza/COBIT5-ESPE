import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTablatresComponent } from './crear-tablatres.component';

describe('CrearTablatresComponent', () => {
  let component: CrearTablatresComponent;
  let fixture: ComponentFixture<CrearTablatresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTablatresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTablatresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
