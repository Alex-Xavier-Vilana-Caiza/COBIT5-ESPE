import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo04raciComponent } from './apo04raci.component';

describe('Apo04raciComponent', () => {
  let component: Apo04raciComponent;
  let fixture: ComponentFixture<Apo04raciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo04raciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo04raciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
