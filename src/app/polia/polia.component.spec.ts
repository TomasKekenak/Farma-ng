import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliaComponent } from './polia.component';

describe('PoliaComponent', () => {
  let component: PoliaComponent;
  let fixture: ComponentFixture<PoliaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
