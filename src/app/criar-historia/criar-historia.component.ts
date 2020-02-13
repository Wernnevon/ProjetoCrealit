import { Component, OnInit } from '@angular/core';

export interface Historia {
  texto: string,
  pergunta: Pergunta,
  autor: string,
  turma: Aluno[],
};
export interface Pergunta {
  pergunta: string,
  alternativas: string[],
  resposta: string,
};
export interface Aluno {
  nome: string,
  turma: string,
  rank: number,
};


@Component({
  selector: 'app-criar-historia',
  templateUrl: './criar-historia.component.html',
  styleUrls: ['./criar-historia.component.css']
})
export class CriarHistoriaComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {
  }
  historia: Historia[] = new Array<Historia>();
  componenteHistoria: Historia = {

    texto: '',
    pergunta:{
      pergunta: '',
      alternativas: ['', '', '', '', ''],
      resposta: '',
    },
    autor: '',
    turma: [],
  }
  salvarPragrafo(){
    this.historia.push(this.componenteHistoria);
    console.log(this.componenteHistoria);
    this.historia.forEach(function(value){
      console.log(value);
    });
  }
  finalizar(){
    return 0;
  }
}
