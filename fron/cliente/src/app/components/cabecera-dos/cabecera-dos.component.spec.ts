import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraDosComponent } from './cabecera-dos.component';

describe('CabeceraDosComponent', () => {
  let component: CabeceraDosComponent;
  let fixture: ComponentFixture<CabeceraDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabeceraDosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabeceraDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
