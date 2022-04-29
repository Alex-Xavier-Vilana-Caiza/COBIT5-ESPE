import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo013casillaComponent } from './apo013casilla.component';

describe('Apo013casillaComponent', () => {
  let component: Apo013casillaComponent;
  let fixture: ComponentFixture<Apo013casillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo013casillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo013casillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
