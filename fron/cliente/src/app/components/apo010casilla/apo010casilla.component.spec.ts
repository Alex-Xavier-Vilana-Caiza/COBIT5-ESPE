import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo010casillaComponent } from './apo010casilla.component';

describe('Apo010casillaComponent', () => {
  let component: Apo010casillaComponent;
  let fixture: ComponentFixture<Apo010casillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo010casillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo010casillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
