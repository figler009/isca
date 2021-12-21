import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeseaseComponent } from './edit-desease.component';

describe('EditDeseaseComponent', () => {
  let component: EditDeseaseComponent;
  let fixture: ComponentFixture<EditDeseaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDeseaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDeseaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
