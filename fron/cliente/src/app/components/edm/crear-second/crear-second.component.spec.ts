import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearSecondComponent } from './crear-second.component';

describe('CrearSecondComponent', () => {
  let component: CrearSecondComponent;
  let fixture: ComponentFixture<CrearSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
