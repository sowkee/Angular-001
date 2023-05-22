import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserData } from 'src/app/model/user-data';
import { ServiceUserService } from 'src/app/service/service-user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedDataService } from 'src/app/service/shared-data.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {

  @Input() usuario!: UserData;
  usuarioSeleccionado: any;
  actualizarForm!: FormGroup;
  private routeSubscription: Subscription = new Subscription;



  constructor(
    private fb: FormBuilder,
    private userService: ServiceUserService,
  
  ) { }

  ngOnInit(): void {
    this.actualizarForm = new FormGroup({
      idUsuario: new FormControl(''),
      nombre: new FormControl(''),
      apellido: new FormControl(''),
      correo: new FormControl(''),
      identificacion: new FormControl(''),
      telefono: new FormControl(''),
      direccion: new FormControl('')

    });

  }

  actualizarUsuario() {
    const data = this.actualizarForm.value;
    this.userService.actualizarUsuario(data).subscribe(res => {
      if (res.status === 'CREATED') {
        console.log(res)
        alert("Actualizacion Exitosa");
        alert("Recargar la pagina.");

      } else {
        alert('Hubo un error');
      }
    });
  }

}
