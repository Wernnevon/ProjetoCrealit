import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';


export class Aluno {
  nome: string;
  nascinmeto: Date;
  sexo: string;
  turma: string;
  senha: string;
  email: string;
}

@Component({
  selector: 'app-cadastro-alunos',
  templateUrl: './cadastro-alunos.component.html',
  styleUrls: ['./cadastro-alunos.component.css']
})
export class CadastroAlunosComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit() {
  }
  
  aluno: Aluno = new Aluno();

  confirmacao: string;

  salvar(){
    console.log(this.aluno);
  }
}
