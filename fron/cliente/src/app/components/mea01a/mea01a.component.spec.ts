import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mea01aComponent } from './mea01a.component';

describe('Mea01aComponent', () => {
  let component: Mea01aComponent;
  let fixture: ComponentFixture<Mea01aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mea01aComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mea01aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
