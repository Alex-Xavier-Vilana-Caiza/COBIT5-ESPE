import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTablaxComponent } from './crear-tablax.component';

describe('CrearTablaxComponent', () => {
  let component: CrearTablaxComponent;
  let fixture: ComponentFixture<CrearTablaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTablaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTablaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
