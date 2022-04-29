import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTablaochoComponent } from './crear-tablaocho.component';

describe('CrearTablaochoComponent', () => {
  let component: CrearTablaochoComponent;
  let fixture: ComponentFixture<CrearTablaochoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTablaochoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTablaochoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
