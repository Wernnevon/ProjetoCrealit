import { Alunos } from './../adicionar-alunos/adicionar-alunos.component';
import { Component, OnInit } from '@angular/core';

export interface Aluno {
  name: string;
  rank: number;
};

@Component({
  selector: 'app-classificacao-alunos',
  templateUrl: './classificacao-alunos.component.html',
  styleUrls: ['./classificacao-alunos.component.css']
})
export class ClassificacaoAlunosComponent implements OnInit {
  alunos: Aluno[] = [
    {
      name: 'Junior',
      rank: 100,
    },
    {
      name: 'Antônio',
      rank: 80,
    },
    {
      name: 'John',
      rank: 95,
    }
  ];
  constructor() { }
  ngOnInit() {
    this.alunos.sort((a,b) => (a.rank - b.rank)*(-1));
  }

}
