import { Component, OnInit } from '@angular/core';
interface Historia {
  texto: String,
  pergunta: Pergunta,
  autor: String,
};
interface Pergunta {
  pergunta: String,
  alternativas: [String],
  resposta: String,
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

}
