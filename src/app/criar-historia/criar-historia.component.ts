import { Component, OnInit } from '@angular/core';

export class Historia {
  texto: string;
  pergunta: Pergunta;
  autor: string;
  turma: Aluno[];

  constructor(){
    this.pergunta = new Pergunta();
    this.turma = new Array <Aluno>();
  }
};
export class Pergunta {
  pergunta: string;
  alternativas: string[];
  resposta: string;
  constructor(){
    this.alternativas = new Array;
  }
};
export class Aluno {
  nome: string;
  turma: string;
  rank: number;
};


@Component({
  selector: 'app-criar-historia',
  templateUrl: './criar-historia.component.html',
  styleUrls: ['./criar-historia.component.css']
})
export class CriarHistoriaComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {
    console.log(this.componenteHistoria)
    console.log(this.historia.length);
  }
  historia: Historia[] = new Array<Historia>();
  componenteHistoria = new Historia();
  salvarPragrafo(){
    this.historia.push(this.componenteHistoria);
    console.log("componenteHistoria"+this.componenteHistoria);
    console.log(this.historia)
    console.log(this.historia.length);
    this.componenteHistoria = new Historia();
  };
  finalizar(){
    return 0;
  }
}
