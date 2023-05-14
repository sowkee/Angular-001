import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AgregarVentaComponent } from '../formularios/agregar-venta/agregar-venta.component';
import { ActualizarVentaComponent } from '../formularios/actualizar-venta/actualizar-venta.component';

@Component({
  selector: 'app-menu-venta',
  templateUrl: './menu-venta.component.html',
  styleUrls: ['./menu-venta.component.css']
})
export class MenuVentaComponent {

  constructor(private dialog: MatDialog) {}

  abrirAgregar() {
    const dialogRef = this.dialog.open(AgregarVentaComponent, {
      width: '50vw',
      height: '60vh',
      data: {}
    });
  }

  abrirActualizar() {
    const dialogRef = this.dialog.open(ActualizarVentaComponent, {
      width: '50vw',
      height: '60vh',
      data: {}
    });
  }
}
