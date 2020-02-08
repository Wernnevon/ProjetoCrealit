import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RanquesComponent } from './ranques.component';

describe('RanquesComponent', () => {
  let component: RanquesComponent;
  let fixture: ComponentFixture<RanquesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RanquesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RanquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
