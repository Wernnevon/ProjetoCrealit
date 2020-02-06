import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhasHistoriasComponent } from './minhas-historias.component';

describe('MinhasHistoriasComponent', () => {
  let component: MinhasHistoriasComponent;
  let fixture: ComponentFixture<MinhasHistoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinhasHistoriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhasHistoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
