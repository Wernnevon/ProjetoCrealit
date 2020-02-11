import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosProfessorComponent } from './dados-professor.component';

describe('DadosProfessorComponent', () => {
  let component: DadosProfessorComponent;
  let fixture: ComponentFixture<DadosProfessorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosProfessorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
