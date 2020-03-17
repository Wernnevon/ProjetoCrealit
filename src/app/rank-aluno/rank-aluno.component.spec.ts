import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankAlunoComponent } from './rank-aluno.component';

describe('RankAlunoComponent', () => {
  let component: RankAlunoComponent;
  let fixture: ComponentFixture<RankAlunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankAlunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
