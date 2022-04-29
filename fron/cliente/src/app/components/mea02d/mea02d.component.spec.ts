import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mea02dComponent } from './mea02d.component';

describe('Mea02dComponent', () => {
  let component: Mea02dComponent;
  let fixture: ComponentFixture<Mea02dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mea02dComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mea02dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
