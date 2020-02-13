import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassificacaoAlunosComponent } from './classificacao-alunos.component';

describe('ClassificacaoAlunosComponent', () => {
  let component: ClassificacaoAlunosComponent;
  let fixture: ComponentFixture<ClassificacaoAlunosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassificacaoAlunosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassificacaoAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
