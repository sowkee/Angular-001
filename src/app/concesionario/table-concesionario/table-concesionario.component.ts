import { Component, OnInit } from '@angular/core';
import { ConcesionarioService } from 'src/app/service/concesionario.service';

@Component({
  selector: 'app-table-concesionario',
  templateUrl: './table-concesionario.component.html',
  styleUrls: ['./table-concesionario.component.css']
})
export class TableConcesionarioComponent implements OnInit{

  listConcesionarios: any[] = [];
  show: boolean = true

  constructor(private concesionarioService: ConcesionarioService) {}

  ngOnInit() {
    this.concesionarioService.getAllConcesionario().subscribe(res => {
      this.listConcesionarios = res.data;
      (this.listConcesionarios.length>0)?this.show = false:this.show = true
      console.log(this.listConcesionarios);
    });
    
  }

}
