import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AgregarComponent } from '../formularios/agregar/agregar.component';
import { ActualizarComponent } from '../formularios/actualizar/actualizar.component';
import { ServiceUserService } from 'src/app/service/service-user.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-menu-acciones',
  templateUrl: './menu-acciones.component.html',
  styleUrls: ['./menu-acciones.component.css']
})
export class MenuAccionesComponent {




  constructor(
    private dialog: MatDialog, 
    public userService: ServiceUserService 
  ) { }


  abrirAgregar() {
    const dialogRef = this.dialog.open(AgregarComponent, {
      width: '50vw',
      height: '60vh',
      data: {}
    });
  }

  abrirActualizar() {
    this.dialog.open(ActualizarComponent, {
      width: '50vw',
      height: '60vh',
      data: {}
      
    });
  }
}
