import { ModalComponent } from './../componentes/compartilhados/modal/modal.component';
import {Component, Inject, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { };

  openDialog(): void{
      const dialogRef = this.dialog.open(ModalComponent, {
        width: '350px',
        data: 'Eu sou Aluno ou Professor?'
      });
    }

  ngOnInit() {
  }

}