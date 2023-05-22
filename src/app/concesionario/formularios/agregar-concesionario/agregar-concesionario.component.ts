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
      idConcesionario: this.agregarForm.get('idConcesionario')?.value,
      nombre: this.agregarForm.get('nombre')?.value,
      correo: this.agregarForm.get('correo')?.value,
      telefono: this.agregarForm.get('telefono')?.value,
      direccion: this.agregarForm.get('direccion')?.value
    }

    this.concesionarioSercivio.crearConcesionario(concesionario).subscribe(res => {
      console.log(res.data);
      if (res.status === 'ACCEPTED') {
        alert("Registro Exitoso");
        alert("Recargar la pagina.");
      } else {
        alert('Hubo un error');
      }
    });
  }
}
