import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados-professor',
  templateUrl: './dados-professor.component.html',
  styleUrls: ['./dados-professor.component.css']
})
export class DadosProfessorComponent implements OnInit {

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

}
