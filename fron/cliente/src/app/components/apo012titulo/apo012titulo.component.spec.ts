import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo012tituloComponent } from './apo012titulo.component';

describe('Apo012tituloComponent', () => {
  let component: Apo012tituloComponent;
  let fixture: ComponentFixture<Apo012tituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo012tituloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo012tituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
