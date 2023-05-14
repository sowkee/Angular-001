import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AgregarConcesionarioComponent } from '../formularios/agregar-concesionario/agregar-concesionario.component';
import { ActualizarConcesionarioComponent } from '../formularios/actualizar-concesionario/actualizar-concesionario.component';

@Component({
  selector: 'app-menu-concesionario',
  templateUrl: './menu-concesionario.component.html',
  styleUrls: ['./menu-concesionario.component.css']
})
export class MenuConcesionarioComponent {

  constructor(private dialog: MatDialog) {}

  abrirAgregar() {
    const dialogRef = this.dialog.open(AgregarConcesionarioComponent, {
      width: '50vw',
      height: '60vh',
      data: {}
    });
  }

  abrirActualizar() {
    const dialogRef = this.dialog.open(ActualizarConcesionarioComponent, {
      width: '50vw',
      height: '60vh',
      data: {}
    });
  }
}
