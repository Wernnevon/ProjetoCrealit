import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { Component, OnInit } from '@angular/core';
import { Classe } from '../criar-classe/criar-classe.component';

export interface Livros {
  turma: string;
}

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.css']
})
export class ClasseComponent implements OnInit {

    livros: Livros[] = [
      {
        turma: '1-Intin',
      },
      {
        turma: '2-Intin',
      },
      {
        turma: '3-Intin',
      },
      {
        turma: '4-Intin',
      }
    ];
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

    turma: any;
    turmas: Observable<any[]>;
    ngOnInit() {
      this.search();
      this.user;
      this.classe();
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
    }
    back(){
      let id = this.route.snapshot.params['id'];
      this.router.navigate(['/professor/' + id]);
    }
    sala(turma){
      let id = this.route.snapshot.params['id'];
      this.router.navigate(['/professor/' + id + '/classificacao/'+ turma]);
    }

}
