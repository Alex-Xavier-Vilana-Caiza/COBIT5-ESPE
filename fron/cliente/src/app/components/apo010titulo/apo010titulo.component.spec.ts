import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo010tituloComponent } from './apo010titulo.component';

describe('Apo010tituloComponent', () => {
  let component: Apo010tituloComponent;
  let fixture: ComponentFixture<Apo010tituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo010tituloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo010tituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
