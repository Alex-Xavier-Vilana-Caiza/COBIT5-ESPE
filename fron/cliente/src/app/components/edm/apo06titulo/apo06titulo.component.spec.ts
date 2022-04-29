import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo06tituloComponent } from './apo06titulo.component';

describe('Apo06tituloComponent', () => {
  let component: Apo06tituloComponent;
  let fixture: ComponentFixture<Apo06tituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo06tituloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo06tituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
