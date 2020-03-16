import { CriarClasseComponent } from './criar-classe/criar-classe.component';
import { ClasseComponent } from './classe/classe.component';
import { ClassificacaoAlunosComponent } from './classificacao-alunos/classificacao-alunos.component';
import { DadosProfessorComponent } from './dados-professor/dados-professor.component';
import { DadosComponent } from './dados/dados.component';
import { RanquesComponent } from './ranques/ranques.component';
import { AdicionarAlunosComponent } from './adicionar-alunos/adicionar-alunos.component';
import { CriarHistoriaComponent } from './criar-historia/criar-historia.component';
import { MinhasHistoriasComponent } from './minhas-historias/minhas-historias.component';
import { HistoriaComponent } from './historia/historia.component';
import { SidenavMenuProfessorComponent } from './sidenav-menu-professor/sidenav-menu-professor.component';
import { CadastroProfessorComponent } from './cadastro-professor/cadastro-professor.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroAlunosComponent } from './cadastro-alunos/cadastro-alunos.component';
import { SidenavMenuAlunoComponent } from './sidenav-menu-aluno/sidenav-menu-aluno.component';
import { MinhasGameficacoesComponent } from './minhas-gameficacoes/minhas-gameficacoes.component';


const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
  },
  {
    path: "cadastroProfessor",
    component: CadastroProfessorComponent,
  },
  {
    path: "cadastroAluno",
    component: CadastroAlunosComponent,
  },
  {
    path: "professor/:id",
    component: SidenavMenuProfessorComponent,
  },
  {
    path: "aluno/:id",
    component: SidenavMenuAlunoComponent,
  },
  {
    path: "aluno/:id/minhasAventuras",
    component: MinhasHistoriasComponent,
  },
  {
    path: "aluno/:id/historia",
    component: HistoriaComponent,
  },
  {
    path: "professor/:id/criarHistoria",
    component: CriarHistoriaComponent,
  },
  {
    path: "professor/:id/adicionarAlunos",
    component: AdicionarAlunosComponent,
  },
  {
    path: "aluno/:id/rank",
    component: RanquesComponent,
  },
  {
    path: 'aluno/:id/dados',
    component: DadosComponent,
  },
  {
    path: 'professor/:id/dados',
    component: DadosProfessorComponent,
  },
  {
    path: 'professor/:id/livros',
    component: MinhasGameficacoesComponent,
  },
  {
    path: 'professor/:id/classificacao/:nome',
    component: ClassificacaoAlunosComponent,
  },
  {
    path: 'professor/:id/classe',
    component: ClasseComponent,
  },
  {
    path: 'professor/:id/criarTurma',
    component: CriarClasseComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }