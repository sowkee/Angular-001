import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { VentaService } from 'src/app/service/venta.service';

@Component({
  selector: 'app-agregar-venta',
  templateUrl: './agregar-venta.component.html',
  styleUrls: ['./agregar-venta.component.css']
})
export class AgregarVentaComponent {
  agregarForm = new FormGroup({
    idVenta: new FormControl(''),
    fechaVenta: new FormControl(''),
    precioFinal: new FormControl(''),
    observaciones: new FormControl('')
  });

  constructor(private ventaService: VentaService, private router: Router) { }

  agregarVenta() {
    let venta = {
      idVenta: this.agregarForm.get('idVenta')?.value,
      fechaVenta: this.agregarForm.get('fechaVenta')?.value,
      precioFinal: this.agregarForm.get('precioFinal')?.value,
      observaciones: this.agregarForm.get('observaciones')?.value
    }

    this.ventaService.crearVenta(venta).subscribe(res => {
      console.log(res.data);
      if (res.status === 'CREATED') {
        alert("Registro Exitoso");
        this.router.navigateByUrl('dashboard/usuarios', { skipLocationChange: true }).then(() => {
          this.router.navigate(['dashboard/usuarios']);
        });
        
      }else {
        alert('Hubo un error');
      }
    });
  }




}
