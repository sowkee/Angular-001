import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarConcesionarioComponent } from './actualizar-concesionario.component';

describe('ActualizarConcesionarioComponent', () => {
  let component: ActualizarConcesionarioComponent;
  let fixture: ComponentFixture<ActualizarConcesionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarConcesionarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarConcesionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
