import { Component, OnInit } from '@angular/core';
import { VentaService } from 'src/app/service/venta.service';

@Component({
  selector: 'app-table-venta',
  templateUrl: './table-venta.component.html',
  styleUrls: ['./table-venta.component.css']
})
export class TableVentaComponent implements OnInit {

  listVentas: any[] = [];
  show: boolean = true;

  constructor(private ventasService: VentaService) { }

  ngOnInit() {
    this.ventasService.getAllVehiculos().subscribe(res => {
      this.listVentas = res.data;
      (this.listVentas.length>0)?this.show = false:this.show = true

      console.log(this.listVentas);
    })
  }

}
