import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Edm01titulosComponent } from './edm01titulos.component';

describe('Edm01titulosComponent', () => {
  let component: Edm01titulosComponent;
  let fixture: ComponentFixture<Edm01titulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Edm01titulosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Edm01titulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
