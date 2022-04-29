import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo6tabla4Component } from './apo6tabla4.component';

describe('Apo6tabla4Component', () => {
  let component: Apo6tabla4Component;
  let fixture: ComponentFixture<Apo6tabla4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo6tabla4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo6tabla4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
