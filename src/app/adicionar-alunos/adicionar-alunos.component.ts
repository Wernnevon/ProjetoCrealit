import { Component, OnInit } from '@angular/core';
import { Aluno } from '../classificacao-alunos/classificacao-alunos.component';

@Component({
  selector: 'app-adicionar-alunos',
  templateUrl: './adicionar-alunos.component.html',
  styleUrls: ['./adicionar-alunos.component.css']
})
export class AdicionarAlunosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  segundoIntin: Aluno[] = [
    {
      name: 'Tonho',
      rank: 45,
    },
    {
      name: 'Chico',
      rank: 80,
    },
    {
      name: 'João',
      rank: 69,
    }
  ];
  
  tamanhoTurma(classe: Aluno[]){
    return classe.length;
  };
}
