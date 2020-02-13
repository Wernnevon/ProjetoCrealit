import { Component, OnInit } from '@angular/core';

export interface Aluno {
  name: string;
  rank: number;
  turma: string
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
      turma: '2° Intin',
    },
    {
      name: 'Antônio',
      rank: 80,
      turma: '2° Intin',
    },
    {
      name: 'John',
      rank: 95,
      turma: '2° Intin',
    }
  ];
  constructor() { }
  ngOnInit() {
    this.alunos.sort((a,b) => (a.rank - b.rank)*(-1));
  }

}
