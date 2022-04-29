import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo06raciComponent } from './apo06raci.component';

describe('Apo06raciComponent', () => {
  let component: Apo06raciComponent;
  let fixture: ComponentFixture<Apo06raciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo06raciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo06raciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
