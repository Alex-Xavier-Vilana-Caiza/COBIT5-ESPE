import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Edm05titulosComponent } from './edm05titulos.component';

describe('Edm05titulosComponent', () => {
  let component: Edm05titulosComponent;
  let fixture: ComponentFixture<Edm05titulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Edm05titulosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Edm05titulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
