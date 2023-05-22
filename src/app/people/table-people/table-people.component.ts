import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserData } from 'src/app/model/user-data';
import { ServiceUserService } from 'src/app/service/service-user.service';
import { ActualizarComponent } from '../formularios/actualizar/actualizar.component';
import { NavigationExtras, Router } from '@angular/router';
import { SharedDataService } from 'src/app/service/shared-data.service';





@Component({
  selector: 'app-table-people',
  templateUrl: './table-people.component.html',
  styleUrls: ['./table-people.component.css'],
})


export class TablePeopleComponent implements OnInit{

  listUsers: UserData[] = [];
  show: boolean = true;
  selectedRows: any[] = [];
  idUsuario: number = 0;

  

  constructor (
    public userService:ServiceUserService, 
    private router: Router, 
  ) { }

  ngOnInit() {
    this.getUsers();
    alert("Los checkpoints no hacen nada.")
  }


  getUsers() {
    this.userService.getAllUsers().subscribe(res => {
      this.listUsers = res.data;
      (this.listUsers.length>0)?this.show = false:this.show = true
      console.log(this.listUsers);
    }, (error) => {
      console.log(error)
    });
    
  }

  eliminarUsuario(idUsuario: number): void {
    this.idUsuario = idUsuario;
    this.userService.eliminarUsuario(this.idUsuario).subscribe(res => {
      console.log("#####", res);
      alert("Se eliminara la fila.");
      alert("Recargar la pagina.");
    });
  }

  seleccionarFila(event: any, user: any) {

    if (event.target.checked) {
      // Agregar la fila a las filas seleccionadas
      this.selectedRows.push(user);
      console.log("Se agrego.", user)
    } else {
      // Remover la fila de las filas seleccionadas
      const index = this.selectedRows.indexOf(user);
      if (index !== -1) {
        this.selectedRows.splice(index, 1);
        console.log("Se elimino.");
      }
    }
  }

}

