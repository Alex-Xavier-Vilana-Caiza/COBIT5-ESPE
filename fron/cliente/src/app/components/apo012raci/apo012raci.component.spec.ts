import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo012raciComponent } from './apo012raci.component';

describe('Apo012raciComponent', () => {
  let component: Apo012raciComponent;
  let fixture: ComponentFixture<Apo012raciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo012raciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo012raciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
