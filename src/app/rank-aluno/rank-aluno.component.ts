import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rank-aluno',
  templateUrl: './rank-aluno.component.html',
  styleUrls: ['./rank-aluno.component.css']
})
export class RankAlunoComponent implements OnInit {

  constructor(
    private db: AngularFireDatabase,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ranques: string;
  cor: string;

  rank: string = "Bronze";
  
  ngOnInit() {
    switch (this.rank) {
      case "Esmeralda":
        this.cor = "#287233";
        this.ranques = "../../assets/images/Ranques Crealit sem fundo/Crealit/esmeralda.png"
        break;
      case "Diamante":
        this.cor = "#3b83bd";
        this.ranques = "../../assets/images/Ranques Crealit sem fundo/Crealit/diamante.png"
        break;
      case "Platina":
        this.cor = "#87ceeb";
        this.ranques = "../../assets/images/Ranques Crealit sem fundo/Crealit/platina.png"
        break;
      case "Ouro":
        this.cor = "#daa520";
        this.ranques = "../../assets/images/Ranques Crealit sem fundo/Crealit/ouro.png"
        break;
      case "Prata":
        this.cor = "#bab8b5";
        this.ranques = "../../assets/images/Ranques Crealit sem fundo/Crealit/prata.png"
        break;
      case "Bronze":
        this.cor = "#b87333";
        this.ranques = "../../assets/images/Ranques Crealit sem fundo/Crealit/bronze.png"
        break;
      default:
        break;
    };
    this.search();
    this.searchProfessor();
  }
  alunos: Observable<any[]>;
  aluno: any;
  user: any;
  userAluno: any;
  nome : any;
  professores: Observable<any[]>;
  professor: any;
  id = this.route.snapshot.params['id'];

  search() {
    let id = this.route.snapshot.params['idAluno'];
    id = parseInt(id);
    this.alunos = this.db.list('alunos').valueChanges();
    this.alunos.forEach(obj => {
      obj.forEach(objChild => {
        this.aluno = objChild.data;
        if (this.aluno.id === id) {
          this.userAluno = this.aluno;
        } else {
          console.log('não retornou')
        }
      })
    })
  }
  searchProfessor(){
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
    let turma = this.route.snapshot.params['nome'];
    this.router.navigate(['/professor/' + id + '/classificacao/' + turma]);
  }

}
