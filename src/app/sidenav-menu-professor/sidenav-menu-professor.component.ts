import { AngularFireDatabase } from '@angular/fire/database';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidenav-menu-professor',
  templateUrl: './sidenav-menu-professor.component.html',
  styleUrls: ['./sidenav-menu-professor.component.css']
})
export class SidenavMenuProfessorComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    panelOpenState = false;

  constructor(
    private breakpointObserver: BreakpointObserver, 
    private db: AngularFireDatabase,
    private route: ActivatedRoute,
    private router: Router,
) { }
ngOnInit(){
  this.search();

}

professores: Observable<any[]>;
  professor: any;
  user: any;
  nome : any;

search() {
  let id = this.route.snapshot.params['id'];
  id = parseInt(id);
  this.professores = this.db.list('professores').valueChanges();
  this.professores.forEach(obj => {
    obj.forEach(objChild => {
      this.professor = objChild.data;
      if (this.professor.id === id) {
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

dados() {
  let id = this.route.snapshot.params['id'];
  this.router.navigate(['/professor/' + id + '/dados']);
}
rank() {
  let id = this.route.snapshot.params['id'];
  this.router.navigate(['/professor/' + id + '/livros']);
}
aventuras() {
  let id = this.route.snapshot.params['id'];
  this.router.navigate(['/professor/' + id + '/criarHistoria']);
}
}
