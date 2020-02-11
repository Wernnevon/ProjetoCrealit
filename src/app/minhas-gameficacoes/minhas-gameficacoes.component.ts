import { Component, OnInit } from '@angular/core';

export interface Livros {
  name: string;
  status: string;
}

@Component({
  selector: 'app-minhas-gameficacoes',
  templateUrl: './minhas-gameficacoes.component.html',
  styleUrls: ['./minhas-gameficacoes.component.css']
})
export class MinhasGameficacoesComponent implements OnInit {
  livros: Livros[] = [
    {
      name: 'O Cortiço',
      status: 'Concluído',
    },
    {
      name: 'Dom Casmurro',
      status: 'Concluído',
    },
    {
      name: 'Memórias Póstumas de Brás Cubas',
      status: 'Em Andamento',
    },
    {
      name: 'Senhor dos Anéis: Sociedade do Anel',
      status: 'Concluído',
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
