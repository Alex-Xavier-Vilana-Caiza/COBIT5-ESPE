import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearFourComponent } from './crear-four.component';

describe('CrearFourComponent', () => {
  let component: CrearFourComponent;
  let fixture: ComponentFixture<CrearFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
