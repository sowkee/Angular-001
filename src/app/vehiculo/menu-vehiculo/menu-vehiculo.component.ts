import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AgregarVehiculoComponent } from '../formularios/agregar-vehiculo/agregar-vehiculo.component';
import { ActualizarVehiculoComponent } from '../formularios/actualizar-vehiculo/actualizar-vehiculo.component';

@Component({
  selector: 'app-menu-vehiculo',
  templateUrl: './menu-vehiculo.component.html',
  styleUrls: ['./menu-vehiculo.component.css']
})
export class MenuVehiculoComponent {

  constructor(private dialog: MatDialog) {}

  abrirAgregar() {
    const dialogRef = this.dialog.open(AgregarVehiculoComponent, {
      width: '50vw',
      height: '60vh',
      data: {}
    });
  }

  abrirActualizar() {
    const dialogRef = this.dialog.open(ActualizarVehiculoComponent, {
      width: '50vw',
      height: '60vh',
      data: {}
    });
  }

}
