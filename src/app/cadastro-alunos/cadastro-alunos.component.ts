import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';


export class Aluno {
  id: number = parseInt((Math.random()*1000).toPrecision(1)) > 0 ? parseInt((Math.random()*10).toPrecision(1)) : parseInt((Math.random()*10).toPrecision(1))+1;
  nome: string;
  nascinmeto: Date;
  sexo: string;
  turma: string;
  senha: string;
  email: string;
  rank: number;
  constructor(){
    this.rank = 0;
  }
}

@Component({
  selector: 'app-cadastro-alunos',
  templateUrl: './cadastro-alunos.component.html',
  styleUrls: ['./cadastro-alunos.component.css']
})
export class CadastroAlunosComponent implements OnInit {

  constructor(private db: AngularFireDatabase, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }
  aluno: Aluno = new Aluno();
  alunos: Observable <any>;

  confirmacao: string;

  salvar(){
    console.log("vai salvar");
    console.log(this.aluno);
    this.db.list('alunos').push({data: this.aluno});
    console.log('parece q foi');
    this.router.navigate(['/'])
  }
  limpar(){
    this.aluno = new Aluno();
    this.confirmacao = null;
  }
}
