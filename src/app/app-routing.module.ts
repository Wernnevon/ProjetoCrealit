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
    path: "professor",
    component: SidenavMenuProfessorComponent,
  },
  {
    path: "aluno",
    component: SidenavMenuAlunoComponent,
  },
  {
    path: "aluno/minhasAventuras",
    component: MinhasHistoriasComponent,
  },
  {
    path: "aluno/historia",
    component: HistoriaComponent,
  },
  {
    path: "professor/criarHistoria",
    component: CriarHistoriaComponent,
  },
  {
    path: "professor/adicionarAlunos",
    component: AdicionarAlunosComponent,
  },
  {
    path: "aluno/rank",
    component: RanquesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }