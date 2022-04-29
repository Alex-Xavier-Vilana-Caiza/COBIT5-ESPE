import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearThreeComponent } from './crear-three.component';

describe('CrearThreeComponent', () => {
  let component: CrearThreeComponent;
  let fixture: ComponentFixture<CrearThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
