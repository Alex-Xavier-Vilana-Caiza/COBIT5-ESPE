import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mea01bComponent } from './mea01b.component';

describe('Mea01bComponent', () => {
  let component: Mea01bComponent;
  let fixture: ComponentFixture<Mea01bComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mea01bComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mea01bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
