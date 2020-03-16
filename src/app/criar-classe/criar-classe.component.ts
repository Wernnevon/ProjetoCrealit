import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

export class Classe {
  alunos: Array<any>[];
  nome: String;
  constructor(){
    this.alunos = new Array();
  }
}

@Component({
  selector: 'app-criar-classe',
  templateUrl: './criar-classe.component.html',
  styleUrls: ['./criar-classe.component.css']
})
export class CriarClasseComponent implements OnInit {

  constructor(
    private db: AngularFireDatabase,
    private route: ActivatedRoute,
    private router: Router,
  ) { }
  professores: Observable<any[]>;
  professor: any;
  user: any;
  nome : any;
  turma: Observable<any[]>;
  alunos: Observable<any[]>;
  aluno: any;
  classe: Classe = new Classe();
  nomeTurma;

  participante: any;
  participantes: Observable<any[]>;
  id = this.route.snapshot.params['id'];
  ngOnInit() {
    this.searchAluno();
    this.search();
    
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
        } else {
          console.log('não retornou')
          return false;
        }
      })
    })
  }
  searchAluno(){
    this.alunos = this.db.list('alunos').valueChanges();
  }
  back(){
    let id = this.route.snapshot.params['id'];
    this.router.navigate(['/professor/' + id]);
  }
  add(alunoUser:any){
    this.classe.alunos.push(alunoUser);
    this.classe.nome = this.nomeTurma;
   
  }
  criarTurma(){
    console.log(this.classe);
    this.db.list('Turmas').push({data: this.classe});
  }
}
