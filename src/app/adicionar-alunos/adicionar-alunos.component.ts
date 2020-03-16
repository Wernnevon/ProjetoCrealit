import { Component, OnInit } from '@angular/core';

interface Turma {
  name: string;
  member: any[];
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
  primeiroIntin: any[] = [
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
  segundoIntin: any[] = [
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
  terceiroIntin: any[] = [
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
