import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apo6tabla2Component } from './apo6tabla2.component';

describe('Apo6tabla2Component', () => {
  let component: Apo6tabla2Component;
  let fixture: ComponentFixture<Apo6tabla2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apo6tabla2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apo6tabla2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
