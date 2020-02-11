import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhasGameficacoesComponent } from './minhas-gameficacoes.component';

describe('MinhasGameficacoesComponent', () => {
  let component: MinhasGameficacoesComponent;
  let fixture: ComponentFixture<MinhasGameficacoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinhasGameficacoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhasGameficacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
