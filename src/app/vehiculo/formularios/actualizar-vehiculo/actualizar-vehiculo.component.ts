import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VehiculoService } from 'src/app/service/vehiculo.service';

@Component({
  selector: 'app-actualizar-vehiculo',
  templateUrl: './actualizar-vehiculo.component.html',
  styleUrls: ['./actualizar-vehiculo.component.css']
})
export class ActualizarVehiculoComponent implements OnInit{
  actualizarForm!: FormGroup;

  constructor(private fb: FormBuilder, private vehiculoServicio: VehiculoService) { }

  ngOnInit(): void {
    this.actualizarForm = this.fb.group({
      idUsuario: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', Validators.required],
      identificacion: ['', Validators.required],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required],
    })
  }

  actualizarVehiculo() {
    const data = this.actualizarForm.value;
    this.vehiculoServicio.actualizarVehiculo(data).subscribe(res => {
      if (res.status === 'CREATED') {
        console.log(res)
        alert("Actualizacion Exitosa");
      }else {
        alert('Hubo un error');
      }
    });
  }

}
