import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarHistoriaComponent } from './criar-historia.component';

describe('CriarHistoriaComponent', () => {
  let component: CriarHistoriaComponent;
  let fixture: ComponentFixture<CriarHistoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarHistoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
