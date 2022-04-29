import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo07raciComponent } from './apo07raci.component';

describe('Apo07raciComponent', () => {
  let component: Apo07raciComponent;
  let fixture: ComponentFixture<Apo07raciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo07raciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo07raciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
