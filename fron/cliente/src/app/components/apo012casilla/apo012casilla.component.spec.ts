import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo012casillaComponent } from './apo012casilla.component';

describe('Apo012casillaComponent', () => {
  let component: Apo012casillaComponent;
  let fixture: ComponentFixture<Apo012casillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo012casillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo012casillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
