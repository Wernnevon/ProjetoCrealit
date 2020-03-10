import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-sidenav-menu-aluno',
  templateUrl: './sidenav-menu-aluno.component.html',
  styleUrls: ['./sidenav-menu-aluno.component.css']
})
export class SidenavMenuAlunoComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private db: AngularFireDatabase,
    private route: ActivatedRoute,
    private router: Router,
  ) { }
  ngOnInit(){
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

  dados() {
    let id = this.route.snapshot.params['id'];
    this.router.navigate(['/aluno/' + id + '/dados']);
  }
  rank() {
    let id = this.route.snapshot.params['id'];
    this.router.navigate(['/aluno/' + id + '/rank']);
  }
  aventuras() {
    let id = this.route.snapshot.params['id'];
    this.router.navigate(['/aluno/' + id + '/minhasAventuras']);
  }
}
