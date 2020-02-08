import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-ranques',
  templateUrl: './ranques.component.html',
  styleUrls: ['./ranques.component.css']
})
export class RanquesComponent implements OnInit {

  constructor() { }

  ranques: string;
  cor: string;

  rank: string = "Diamante";
  
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
    }
  }
}