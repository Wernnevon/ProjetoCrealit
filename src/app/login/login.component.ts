import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { ModalComponent } from './../componentes/compartilhados/modal/modal.component';
import {Component, Inject, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private db: AngularFireDatabase,
    private route: ActivatedRoute, 
    private router: Router,
  ) { };
  usuario: string;
  senha: string;
  alunos: Observable<any[]>;
  professores: Observable<any[]>;
  aluno: any;
  professor: any;
  logOn: boolean = false;

  openDialog(): void{
      const dialogRef = this.dialog.open(ModalComponent, {
        width: '350px',
        data: 'Eu sou Aluno ou Professor?'
      });
    }

  ngOnInit() {
  }

  logIn(){
    this.logInAluno();
    this.logInProfessor();
    
  }
  logInAluno(){
    this.alunos = this.db.list('alunos').valueChanges();
    this.alunos.forEach(obj => {
      obj.forEach(objChild => {
        this.aluno = objChild.data;
        if(this.aluno.email === this.usuario){
          if(this.aluno.senha === this.senha) {
            this.router.navigate(['/aluno/' + this.aluno.id]);
            return true;
          }
          else return false
        }else {
          this.logOn = true;
          return false;
        }
      })
    })
  }
  logInProfessor(){
    this.professores = this.db.list('professores').valueChanges();
    this.professores.forEach(obj => {
      obj.forEach(objChild => {
        this.professor = objChild.data;
        if(this.professor.email === this.usuario){ console.log('erro é usuario');
          if (this.professor.senha === this.senha) {
            this.router.navigate(['/professor/' + this.professor.id]);
            return true;
          }
          else return false;
        }else {
          this.logOn = true;
          return false;
        }
      })
    })
  }
}