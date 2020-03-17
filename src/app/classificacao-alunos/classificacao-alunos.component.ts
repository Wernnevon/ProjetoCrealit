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
  sala: any;

  alunoz:any;
  turma:Classe = new Classe;
  classe: Array<any> = new Array();
  ngOnInit() {
    this.search();
    this.user;
    this.turma;
    this.getAlunos();
    this.getTurmas();
  };

  getAlunos(){
    this.alunos = this.db.list('alunos').valueChanges();
    this.alunos.forEach(obj => {
      obj.forEach(objChild => {
        this.alunoz = objChild.data;
      })
    })
  };


  getTurmas(){
    let nometurma: String = this.route.snapshot.params['nome'];
    this.sala = this.db.list('Turmas').valueChanges();
    this.sala.forEach(obj => {
      obj.forEach(objChild => {
        if(objChild.data.nome === nometurma){
          this.turma = objChild.data;
          this.classe = this.turma.alunos;
          return this.turma;
        }
        else{
          return 0
        }
      });
    });
  };

  search(){
    this.id = parseInt(this.id);
    this.professores = this.db.list('professores').valueChanges();
    this.professores.forEach(obj => {
      obj.forEach(objChild => {
        this.professor = objChild.data;
        if (this.professor.id === this.id) {
          this.user = this.professor;
          this.nome = this.professor.nome
          return true;
        }else {
          return false;
        };
      });
    });
  };
  home(){
    let id = this.route.snapshot.params['id'];
    this.router.navigate(['/professor/' + id]);
  }
  back(){
    let id = this.route.snapshot.params['id'];
    this.router.navigate(['/professor/' + id + '/classe']);
  }
  rank(idAluno){
    let id = this.route.snapshot.params['id'];
    let turma = this.route.snapshot.params['nome'];
    this.router.navigate(['/professor/' + id + '/' + turma + '/rankAluno/' + idAluno]);
  }
  criar(){
      let id = this.route.snapshot.params['id'];
      this.router.navigate(['/professor/' + id + '/criarHistoria']);
  }

}
