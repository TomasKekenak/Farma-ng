import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoleEditComponent } from './pole-edit.component';

describe('PoleEditComponent', () => {
  let component: PoleEditComponent;
  let fixture: ComponentFixture<PoleEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoleEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
