import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearBai09Component } from './crear-bai09.component';

describe('CrearBai09Component', () => {
  let component: CrearBai09Component;
  let fixture: ComponentFixture<CrearBai09Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearBai09Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearBai09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
