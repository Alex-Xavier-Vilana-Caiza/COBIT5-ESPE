import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Edm01casillasComponent } from './edm01casillas.component';

describe('Edm01casillasComponent', () => {
  let component: Edm01casillasComponent;
  let fixture: ComponentFixture<Edm01casillasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Edm01casillasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Edm01casillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
