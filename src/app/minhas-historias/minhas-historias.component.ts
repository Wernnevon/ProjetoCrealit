import { Component, OnInit } from '@angular/core';

export interface Livros {
  name: string;
  class: string;
}

@Component({
  selector: 'app-minhas-historias',
  templateUrl: './minhas-historias.component.html',
  styleUrls: ['./minhas-historias.component.css']
})
export class MinhasHistoriasComponent implements OnInit {

  livros: Livros[] = [
    {
      name: 'O Cortiço',
      class: '3° Intin',
    },
    {
      name: 'Dom Casmurro',
      class: '1° Intin',
    },
    {
      name: 'Memórias Póstumas de Brás Cubas',
      class: '2° Intin',
    }
  ];

  constructor() { }
  
  ngOnInit() {
  }
}
