import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VentaService } from 'src/app/service/venta.service';

@Component({
  selector: 'app-actualizar-venta',
  templateUrl: './actualizar-venta.component.html',
  styleUrls: ['./actualizar-venta.component.css']
})
export class ActualizarVentaComponent {
  actualizarForm!: FormGroup;

  constructor(private fb: FormBuilder, private ventaService: VentaService) { }

  ngOnInit(): void {
    this.actualizarForm = this.fb.group({
      idVenta: [''],
      fechaVenta: [''],
      precioFinal: [''],
      observaciones: ['']
    });
  }

  actualizarVenta() {
    const data = this.actualizarForm.value;
    this.ventaService.actualizarVenta(data).subscribe(res => {
      if (res.status === 'CREATED') {
        console.log(res)
        alert("Actualizacion Exitosa");
      }else {
        alert('Hubo un error');
      }
    });
  }
}
