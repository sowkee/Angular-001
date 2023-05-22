import { Component, OnInit } from '@angular/core';
import { VehiculosData } from 'src/app/model/vehiculos-data';
import { VehiculoService } from 'src/app/service/vehiculo.service';

@Component({
  selector: 'app-table-vehiculo',
  templateUrl: './table-vehiculo.component.html',
  styleUrls: ['./table-vehiculo.component.css']
})
export class TableVehiculoComponent implements OnInit {

  listVehiculos: VehiculosData[] = [];
  show:boolean = true;
  idVehiculo: number = 0;

  constructor(private vehiculoService:VehiculoService) {}

  ngOnInit(){
    this.getVehiculos();
  }

  getVehiculos() {
    this.vehiculoService.getAllVehiculos().subscribe(res => {
      this.listVehiculos = res.data;
      (this.listVehiculos.length>0)?this.show = false:this.show = true

      console.log(this.listVehiculos);
    }, (error) => {
      console.log(error)
    });
  }

  eliminarVehiculo(idVehiculo:number) {
    this.idVehiculo = idVehiculo;
    this.vehiculoService.eliminarVehiculo(this.idVehiculo).subscribe(res => {
      console.log("#####", res);
      alert("Se eliminara la fila.");
      alert("Recargar la pagina.");
    });
  }
}
