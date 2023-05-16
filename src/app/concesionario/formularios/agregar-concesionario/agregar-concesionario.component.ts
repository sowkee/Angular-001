import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ConcesionarioService } from 'src/app/service/concesionario.service';
@Component({
  selector: 'app-agregar-concesionario',
  templateUrl: './agregar-concesionario.component.html',
  styleUrls: ['./agregar-concesionario.component.css']
})
export class AgregarConcesionarioComponent {
  /*
  
  idConcesionario: number,
      nombre: string,
      correo: string,
      telefono: string,
      direccion: string
  */

  agregarForm = new FormGroup({
    idConcesionario: new FormControl(''),
    nombre: new FormControl(''),
    correo: new FormControl(''),
    telefono: new FormControl(''),
    direccion: new FormControl(''),

  })

  constructor(private concesionarioSercivio: ConcesionarioService, private router: Router) { }


  agegarConcesionario(): void {

    let concesionario = {
      idConcesionario: this.agregarForm.get('idUsuario')?.value,
      nombre: this.agregarForm.get('nombre')?.value,
      correo: this.agregarForm.get('correo')?.value,
      telefono: this.agregarForm.get('telefono')?.value,
      direccion: this.agregarForm.get('direccion')?.value
    }

    this.concesionarioSercivio.crearConcesionario(concesionario).subscribe(res => {
      console.log(res);
      if (res.status === 'CREATED') {
        alert("Registro Exitoso");

      } else {
        alert('Hubo un error');
      }
    });
  }
}
