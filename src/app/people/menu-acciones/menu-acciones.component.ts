import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AgregarComponent } from '../formularios/agregar/agregar.component';
import { ActualizarComponent } from '../formularios/actualizar/actualizar.component';

@Component({
  selector: 'app-menu-acciones',
  templateUrl: './menu-acciones.component.html',
  styleUrls: ['./menu-acciones.component.css']
})
export class MenuAccionesComponent {
  constructor(private dialog: MatDialog) {}

  abrirAgregar() {
    const dialogRef = this.dialog.open(AgregarComponent, {
      width: '50vw',
      height: '60vh',
      data: {}
    });
  }

  abrirActualizar() {
    const dialogRef = this.dialog.open(ActualizarComponent, {
      width: '50vw',
      height: '60vh',
      data: {}
    });
  }
}
