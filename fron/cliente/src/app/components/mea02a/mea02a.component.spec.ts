import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mea02aComponent } from './mea02a.component';

describe('Mea02aComponent', () => {
  let component: Mea02aComponent;
  let fixture: ComponentFixture<Mea02aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mea02aComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mea02aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
