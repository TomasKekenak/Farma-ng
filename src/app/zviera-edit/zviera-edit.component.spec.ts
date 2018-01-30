import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZvieraEditComponent } from './zviera-edit.component';

describe('ZvieraEditComponent', () => {
  let component: ZvieraEditComponent;
  let fixture: ComponentFixture<ZvieraEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZvieraEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZvieraEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
