import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearHeadComponent } from './crear-head.component';

describe('CrearHeadComponent', () => {
  let component: CrearHeadComponent;
  let fixture: ComponentFixture<CrearHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearHeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
