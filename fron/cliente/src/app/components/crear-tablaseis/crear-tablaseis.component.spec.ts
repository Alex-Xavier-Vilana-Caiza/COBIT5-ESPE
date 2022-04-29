import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTablaseisComponent } from './crear-tablaseis.component';

describe('CrearTablaseisComponent', () => {
  let component: CrearTablaseisComponent;
  let fixture: ComponentFixture<CrearTablaseisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTablaseisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTablaseisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
