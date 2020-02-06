import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

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

  constructor(private breakpointObserver: BreakpointObserver) {}
}
