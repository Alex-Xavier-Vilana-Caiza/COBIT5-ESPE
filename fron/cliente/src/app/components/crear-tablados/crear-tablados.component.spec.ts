import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTabladosComponent } from './crear-tablados.component';

describe('CrearTabladosComponent', () => {
  let component: CrearTabladosComponent;
  let fixture: ComponentFixture<CrearTabladosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTabladosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTabladosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
