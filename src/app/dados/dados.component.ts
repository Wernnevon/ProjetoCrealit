import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})
export class DadosComponent implements OnInit {
  constructor(
    private db: AngularFireDatabase,
    private route: ActivatedRoute,
    private router: Router,
  ) { }
  alunos: Observable<any[]>;
  aluno: any;
  user: any;
  nome : any;
  id = this.route.snapshot.params['id'];
  ngOnInit() {
    this.search();
    this.user;
  }
  search(){
    this.id = parseInt(this.id);
    this.alunos = this.db.list('alunos').valueChanges();
    this.alunos.forEach(obj => {
      obj.forEach(objChild => {
        this.aluno = objChild.data;
        if (this.aluno.id === this.id) {
          console.log('retornou!');
          this.user = this.aluno;
          this.nome = this.aluno.nome
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
    this.router.navigate(['/aluno/' + id]);
  }

}
