import { Component, OnInit } from '@angular/core';

export class Professor {
  nome: string;
  nascinmeto: Date;
  sexo: string;
  senha: string;
  email: string;
}

@Component({
  selector: 'app-cadastro-professor',
  templateUrl: './cadastro-professor.component.html',
  styleUrls: ['./cadastro-professor.component.css']
})
export class CadastroProfessorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  professor: Professor = new Professor;

  salvar(){
    console.log(this.professor)
  }
}
