import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
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
    constructor(
      private db: AngularFireDatabase,
      private route: ActivatedRoute,
      private router: Router,
    ) { }
    professores: Observable<any[]>;
    professor: any;
    user: any;
    nome : any;
    id = this.route.snapshot.params['id'];
    ngOnInit() {
      this.search();
      this.user;
      console.log(this.componenteHistoria)
      console.log(this.historia.length);
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
    back(){
      let id = this.route.snapshot.params['id'];
      this.router.navigate(['/professor/' + id]);
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
