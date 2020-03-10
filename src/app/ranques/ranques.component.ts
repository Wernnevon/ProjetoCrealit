import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-ranques',
  templateUrl: './ranques.component.html',
  styleUrls: ['./ranques.component.css']
})
export class RanquesComponent implements OnInit {

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
  }
  alunos: Observable<any[]>;
  aluno: any;
  user: any;
  nome : any;

  search() {
    let id = this.route.snapshot.params['id'];
    id = parseInt(id);
    this.alunos = this.db.list('alunos').valueChanges();
    this.alunos.forEach(obj => {
      obj.forEach(objChild => {
        this.aluno = objChild.data;
        if (this.aluno.id === id) {
          console.log('retornou!');
          this.user = this.aluno;
          this.nome = this.user.nome;
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