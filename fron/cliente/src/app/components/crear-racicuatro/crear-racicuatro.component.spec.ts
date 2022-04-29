import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearRacicuatroComponent } from './crear-racicuatro.component';

describe('CrearRacicuatroComponent', () => {
  let component: CrearRacicuatroComponent;
  let fixture: ComponentFixture<CrearRacicuatroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearRacicuatroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearRacicuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
