import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo06casillaComponent } from './apo06casilla.component';

describe('Apo06casillaComponent', () => {
  let component: Apo06casillaComponent;
  let fixture: ComponentFixture<Apo06casillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo06casillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo06casillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
