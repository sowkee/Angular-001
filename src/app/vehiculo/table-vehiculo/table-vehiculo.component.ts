import { Component, OnInit } from '@angular/core';
import { VehiculoService } from 'src/app/service/vehiculo.service';

@Component({
  selector: 'app-table-vehiculo',
  templateUrl: './table-vehiculo.component.html',
  styleUrls: ['./table-vehiculo.component.css']
})
export class TableVehiculoComponent implements OnInit {

  listVehiculos: any[] = [];
  show:boolean = true;

  constructor(private vehiculoService:VehiculoService) {}

  ngOnInit(){
    this.vehiculoService.getAllVehiculos().subscribe(res => {
      this.listVehiculos = res.data;
      (this.listVehiculos.length>0)?this.show = false:this.show = true

      console.log(this.listVehiculos);
    })
  }

}
