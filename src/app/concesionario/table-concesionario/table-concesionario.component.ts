import { Component, OnInit, ViewChild } from '@angular/core';
import { ConcesionarioData } from 'src/app/model/concesionario-data';
import { MatTableModule } from '@angular/material/table';

import { ConcesionarioService } from 'src/app/service/concesionario.service';
import { MatPaginator } from '@angular/material/paginator';



@Component({
  selector: 'app-table-concesionario',
  templateUrl: './table-concesionario.component.html',
  styleUrls: ['./table-concesionario.component.css']
})
export class TableConcesionarioComponent implements OnInit {

  


  listConcesionarios: ConcesionarioData[] = [];
  show: boolean = true

  constructor(private concesionarioService: ConcesionarioService) { }

  ngOnInit() {
    this.getConcesionarios();

  }

  getConcesionarios() {
    this.concesionarioService.getAllConcesionario().subscribe(res => {
      this.listConcesionarios = res.data;
      (this.listConcesionarios.length > 0) ? this.show = false : this.show = true
      console.log(this.listConcesionarios);
      
      
    }, (error) => {
      console.log(error)
    });
    

    
  }

}
