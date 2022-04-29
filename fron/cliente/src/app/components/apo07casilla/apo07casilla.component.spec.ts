import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo07casillaComponent } from './apo07casilla.component';

describe('Apo07casillaComponent', () => {
  let component: Apo07casillaComponent;
  let fixture: ComponentFixture<Apo07casillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo07casillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo07casillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
