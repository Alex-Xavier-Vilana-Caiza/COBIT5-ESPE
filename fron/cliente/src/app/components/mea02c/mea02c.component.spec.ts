import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mea02cComponent } from './mea02c.component';

describe('Mea02cComponent', () => {
  let component: Mea02cComponent;
  let fixture: ComponentFixture<Mea02cComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mea02cComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mea02cComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
