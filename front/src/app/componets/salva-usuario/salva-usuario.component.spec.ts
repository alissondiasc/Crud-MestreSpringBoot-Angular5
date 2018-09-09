import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvaUsuarioComponent } from './salva-usuario.component';

describe('SalvaUsuarioComponent', () => {
  let component: SalvaUsuarioComponent;
  let fixture: ComponentFixture<SalvaUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalvaUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
