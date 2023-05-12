import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const urlBase = "http://localhost:8080/ventas";

@Injectable({
  providedIn: 'root'
})
export class VentaService {



  constructor(private http:HttpClient) { }

  getAllVehiculos() {
    return this.http.get<any>(urlBase + "/all")
  }
}
