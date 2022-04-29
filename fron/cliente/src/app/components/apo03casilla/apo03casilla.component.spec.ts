import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo03casillaComponent } from './apo03casilla.component';

describe('Apo03casillaComponent', () => {
  let component: Apo03casillaComponent;
  let fixture: ComponentFixture<Apo03casillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo03casillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo03casillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
