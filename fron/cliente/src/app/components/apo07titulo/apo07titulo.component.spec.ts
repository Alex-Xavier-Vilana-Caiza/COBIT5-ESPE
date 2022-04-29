import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo07tituloComponent } from './apo07titulo.component';

describe('Apo07tituloComponent', () => {
  let component: Apo07tituloComponent;
  let fixture: ComponentFixture<Apo07tituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo07tituloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo07tituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
