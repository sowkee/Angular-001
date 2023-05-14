import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServiceUserService } from 'src/app/service/service-user.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  agregarForm = new FormGroup({
    idUsuario: new FormControl(''),
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    correo: new FormControl(''),
    identificacion: new FormControl(''),
    telefono: new FormControl(''),
    direccion: new FormControl(''),

  })

  constructor(private usuarioSercivio: ServiceUserService) { }

  agegarUsuario(): void {

    let usuario = {
      idUsuario: this.agregarForm.get('idUsuario')?.value,
      nombre: this.agregarForm.get('nombre')?.value,
      apellido: this.agregarForm.get('apellido')?.value,
      correo: this.agregarForm.get('correo')?.value,
      identificacion: this.agregarForm.get('identificacion')?.value,
      telefono: this.agregarForm.get('telefono')?.value,
      direccion: this.agregarForm.get('direccion')?.value
    }

    this.usuarioSercivio.crearUsuario(usuario).subscribe(res => {
      if (res.status === 'CREATED') {
        alert("Registro Exitoso");
      }else {
        alert('Hubo un error');
      }
    });
  }

}
