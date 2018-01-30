import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZvierataComponent } from './zvierata.component';

describe('ZvierataComponent', () => {
  let component: ZvierataComponent;
  let fixture: ComponentFixture<ZvierataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZvierataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZvierataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
