import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTablazComponent } from './crear-tablaz.component';

describe('CrearTablazComponent', () => {
  let component: CrearTablazComponent;
  let fixture: ComponentFixture<CrearTablazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTablazComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTablazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
