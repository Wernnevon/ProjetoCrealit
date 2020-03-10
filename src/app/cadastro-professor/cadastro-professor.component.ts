import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

export class Professor {
  id: number = parseInt((Math.random()*10).toPrecision(1)) > 0 ? parseInt((Math.random()*10).toPrecision(1)) : parseInt((Math.random()*10).toPrecision(1))+1;
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

  constructor(private db: AngularFireDatabase, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  professor: Professor = new Professor;
  professores: Observable <any>;

  confirmacao: string;

  salvar(){
    console.log("vai salvar");
    console.log(this.professor);
    this.db.list('professores').push({data: this.professor});
    console.log('parece q foi');
    this.router.navigate(['/']);
  }
}
