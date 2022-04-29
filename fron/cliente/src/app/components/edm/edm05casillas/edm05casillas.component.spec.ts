import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Edm05casillasComponent } from './edm05casillas.component';

describe('Edm05casillasComponent', () => {
  let component: Edm05casillasComponent;
  let fixture: ComponentFixture<Edm05casillasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Edm05casillasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Edm05casillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
