import { Component, OnInit } from '@angular/core';
import { Aluno } from '../classificacao-alunos/classificacao-alunos.component';

interface Turma {
  name: string;
  member: Aluno[];
}

@Component({
  selector: 'app-adicionar-alunos',
  templateUrl: './adicionar-alunos.component.html',
  styleUrls: ['./adicionar-alunos.component.css']
})
export class AdicionarAlunosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  primeiroIntin: Aluno[] = [
    {
      name: 'Tonho',
      rank: 45,
      turma: '1° Intin',
    },
    {
      name: 'Chico',
      rank: 80,
      turma: '1° Intin',
    },
    {
      name: 'João',
      rank: 69,
      turma: '1° Intin',
    }
  ];
  segundoIntin: Aluno[] = [
    {
      name: 'Tonho',
      rank: 45,
      turma: '2° Intin',
    },
    {
      name: 'Chico',
      rank: 80,
      turma: '2° Intin',
    },
    {
      name: 'João',
      rank: 69,
      turma: '2° Intin',
    },
    {
      name: 'Tonho',
      rank: 45,
      turma: '2° Intin',
    },
    {
      name: 'Chico',
      rank: 80,
      turma: '2° Intin',
    },
    {
      name: 'João',
      rank: 69,
      turma: '2° Intin',
    }
  ];
  terceiroIntin: Aluno[] = [
    {
      name: 'Tonho',
      rank: 45,
      turma: '3° Intin',
    },
    {
      name: 'Chico',
      rank: 80,
      turma: '3 Intin',
    },
    {
      name: 'João',
      rank: 69,
      turma: '3° Intin',
    }
  ];

  turmas: Turma[] = [
    {
      name: '1° Intin',
      member: this.primeiroIntin,
    },
    {
      name: '2° Intin',
      member: this.segundoIntin,
    },
    {
      name: '3° Intin',
      member: this.terceiroIntin,
    },
  ];
  
  tamanhoTurma(classe: Turma){
    return classe.member.length
  };
}
