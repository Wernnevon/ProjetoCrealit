import { Component, OnInit } from '@angular/core';
import { FUNCTION_TYPE } from '@angular/compiler/src/output/output_ast';

export interface Alunos {
  name: string;
  class: string;
};
export interface Turma {
  name: string;
  member: Alunos[];
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
  primeiroIntin: Alunos[] = [
    {
      name: 'Negão',
      class: '1° Intin',
    },
    {
      name: 'Wandenbar',
      class: '1° Intin',
    },
    {
      name: 'David',
      class: '1° Intin',
    }
  ];
  segundoIntin: Alunos[] = [
    {
      name: 'Tonho',
      class: '2° Intin',
    },
    {
      name: 'Chico',
      class: '2° Intin',
    },
    {
      name: 'João',
      class: '2° Intin',
    }
  ];
  terceiroIntin: Alunos[] = [
    {
      name: 'Andre',
      class: '3° Intin',
    },
    {
      name: 'Thiago',
      class: '3° Intin',
    },
    {
      name: 'Afonso',
      class: '3° Intin',
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
      member: this.segundoIntin,
    },
  ];
  tamanhoTurma(classe: Turma){
    return classe.member.length
  };
}
