import {MatSidenavModule, MatListModule, MatToolbarModule, MatFormFieldModule, MatSelectModule, MatRadioModule} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroProfessorComponent } from './cadastro-professor/cadastro-professor.component';
import { CadastroAlunosComponent } from './cadastro-alunos/cadastro-alunos.component';
import { LoginComponent } from './login/login.component';
import { CriarHistoriaComponent } from './criar-historia/criar-historia.component';
import { MinhasHistoriasComponent } from './minhas-historias/minhas-historias.component';
import { CriarPersonagemComponent } from './criar-personagem/criar-personagem.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './componentes/compartilhados/modal/modal.component';
import { 
MatDialogModule, 
MatButtonModule, 
MatExpansionModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { SidenavMenuProfessorComponent } from './sidenav-menu-professor/sidenav-menu-professor.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatIconModule } from '@angular/material/icon';
import { SidenavMenuAlunoComponent } from './sidenav-menu-aluno/sidenav-menu-aluno.component';
import { HistoriaComponent } from './historia/historia.component';
import { AdicionarAlunosComponent } from './adicionar-alunos/adicionar-alunos.component';
import { RanquesComponent } from './ranques/ranques.component';
import { DadosComponent } from './dados/dados.component';
import { DadosProfessorComponent } from './dados-professor/dados-professor.component';
import { MinhasGameficacoesComponent } from './minhas-gameficacoes/minhas-gameficacoes.component';
import { ClassificacaoAlunosComponent } from './classificacao-alunos/classificacao-alunos.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ClasseComponent } from './classe/classe.component';
import { CriarClasseComponent } from './criar-classe/criar-classe.component';
import { RankAlunoComponent } from './rank-aluno/rank-aluno.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroProfessorComponent,
    CadastroAlunosComponent,
    LoginComponent,
    CriarHistoriaComponent,
    MinhasHistoriasComponent,
    CriarPersonagemComponent,
    ModalComponent,
    SidenavMenuProfessorComponent,
    SidenavMenuAlunoComponent,
    HistoriaComponent,
    AdicionarAlunosComponent,
    RanquesComponent,
    DadosComponent,
    DadosProfessorComponent,
    MinhasGameficacoesComponent,
    ClassificacaoAlunosComponent,
    ClasseComponent,
    CriarClasseComponent,
    RankAlunoComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule, 
    MatButtonModule,
    MatSidenavModule,
    FormsModule,
    MatListModule,
    MatToolbarModule,
    LayoutModule,
    MatIconModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatSelectModule,
    HttpClientModule,
    MatRadioModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  entryComponents: [ModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
