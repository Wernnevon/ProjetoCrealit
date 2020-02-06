import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAlunosComponent } from './cadastro-alunos.component';

describe('CadastroAlunosComponent', () => {
  let component: CadastroAlunosComponent;
  let fixture: ComponentFixture<CadastroAlunosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroAlunosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
