import { Classe } from './../criar-classe/criar-classe.component';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-classificacao-alunos',
  templateUrl: './classificacao-alunos.component.html',
  styleUrls: ['./classificacao-alunos.component.css']
})
export class ClassificacaoAlunosComponent implements OnInit {
  constructor(
    private db: AngularFireDatabase,
    private route: ActivatedRoute,
    private router: Router,
  ) { }
  professores: Observable<any[]>;
  professor: any;
  alunos: Observable<any[]>;
  aluno: any;
  user: any;
  nome : any;
  id = this.route.snapshot.params['id'];

  turma: any;
  players: any[];
  player: any; 
  turmas: Observable<any[]>;
  novoArray: Array<any> = new Array;
  users: any[];

  sala: Classe;
  ngOnInit() {
    this.search();
    this.user;
    this.classe();
    this.jogadores();
    this.turma
    this.players = new Array();
    this.novoArray = new Array();
    this.users =new Array();
  }
  search(){
    this.id = parseInt(this.id);
    this.professores = this.db.list('professores').valueChanges();
    this.professores.forEach(obj => {
      obj.forEach(objChild => {
        this.professor = objChild.data;
        if (this.professor.id === this.id) {
          console.log('retornou!');
          this.user = this.professor;
          this.nome = this.professor.nome
          console.log(this.user)
        } else {
          console.log('não retornou')
          return false;
        }
      })
    })
  }
  classe(){
    this.turmas = this.db.list('Turmas').valueChanges();
    this.alunos = this.db.list('alunos').valueChanges();
    let nometurma = this.route.snapshot.params['nome'];
    this.turmas.forEach(element => {
      element.forEach(obj => {
        if(obj.data.nome === nometurma){
          this.players = obj.data.alunos;
          console.log(this.players)
        }
      })
    });
    this.alunos.forEach(element => {
      element.forEach(obj => {
        this.users.push(obj.data)
        console.log(this.users)
      })
    });
  }
  home(){
    let id = this.route.snapshot.params['id'];
    this.router.navigate(['/professor/' + id]);
  }
  back(){
    let id = this.route.snapshot.params['id'];
    this.router.navigate(['/professor/' + id + '/classe']);
  }
  jogadores(){
    this.users.forEach(element =>{
      this.players.forEach(obj => {
        if(element.id === obj.id){
          this.novoArray.push(obj);
        }
      })
    })
  }

}
