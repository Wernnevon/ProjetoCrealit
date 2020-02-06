import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarAlunosComponent } from './adicionar-alunos.component';

describe('AdicionarAlunosComponent', () => {
  let component: AdicionarAlunosComponent;
  let fixture: ComponentFixture<AdicionarAlunosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarAlunosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
