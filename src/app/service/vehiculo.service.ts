import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const urlBase = "http://localhost:8080/vehiculos";

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  constructor(private http:HttpClient) { }

  getAllVehiculos() {
    return this.http.get<any>(urlBase + "/all");
  }
}
