import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearApotComponent } from './crear-apot.component';

describe('CrearApotComponent', () => {
  let component: CrearApotComponent;
  let fixture: ComponentFixture<CrearApotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearApotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearApotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
