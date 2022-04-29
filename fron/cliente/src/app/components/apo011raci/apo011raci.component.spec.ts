import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo011raciComponent } from './apo011raci.component';

describe('Apo011raciComponent', () => {
  let component: Apo011raciComponent;
  let fixture: ComponentFixture<Apo011raciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo011raciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo011raciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
