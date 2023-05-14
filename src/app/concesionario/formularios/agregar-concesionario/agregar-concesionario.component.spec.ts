import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarConcesionarioComponent } from './agregar-concesionario.component';

describe('AgregarConcesionarioComponent', () => {
  let component: AgregarConcesionarioComponent;
  let fixture: ComponentFixture<AgregarConcesionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarConcesionarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarConcesionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
