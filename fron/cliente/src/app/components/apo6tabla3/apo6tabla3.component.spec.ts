import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo6tabla3Component } from './apo6tabla3.component';

describe('Apo6tabla3Component', () => {
  let component: Apo6tabla3Component;
  let fixture: ComponentFixture<Apo6tabla3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo6tabla3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo6tabla3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
