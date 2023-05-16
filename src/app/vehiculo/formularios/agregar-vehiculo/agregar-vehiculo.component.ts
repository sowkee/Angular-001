import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { VehiculoService } from 'src/app/service/vehiculo.service';

@Component({
  selector: 'app-agregar-vehiculo',
  templateUrl: './agregar-vehiculo.component.html',
  styleUrls: ['./agregar-vehiculo.component.css']
})
export class AgregarVehiculoComponent {

  agregarForm = new FormGroup({
    idVehiculos: new FormControl(''),
    kilometraje: new FormControl(''),
    matricula: new FormControl(''),
    marca: new FormControl(''),
    modelo: new FormControl(''),
    color: new FormControl(''),
    precio: new FormControl(''),

  })

  constructor(private vehiculoServicio: VehiculoService, private router: Router) { }

  agregarVehiculo(): void {

    let vehiculo = {
      idVehiculos: this.agregarForm.get('idVehiculos')?.value,
      kilometraje: this.agregarForm.get('kilometraje')?.value,
      matricula: this.agregarForm.get('matricula')?.value,
      marca: this.agregarForm.get('marca')?.value,
      modelo: this.agregarForm.get('modelo')?.value,
      color: this.agregarForm.get('color')?.value,
      precio: this.agregarForm.get('precio')?.value
    }

    this.vehiculoServicio.crearVehiculo(vehiculo).subscribe(res => {
      console.log(res);
      if (res.status === 'CREATED') {
        alert("Registro Exitoso");
        
      }else {
        alert('Hubo un error');
      }
    });
  }

}
