import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mea02bComponent } from './mea02b.component';

describe('Mea02bComponent', () => {
  let component: Mea02bComponent;
  let fixture: ComponentFixture<Mea02bComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mea02bComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mea02bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
