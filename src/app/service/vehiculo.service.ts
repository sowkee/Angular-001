import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseI } from '../model/response-i';
import { Observable } from 'rxjs';


const urlBase = "http://localhost:8080/vehiculos";

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  constructor(private http:HttpClient) { }

  getAllVehiculos(): Observable<ResponseI> {
    return this.http.get<ResponseI>(urlBase + "/all");
  }

  crearVehiculo(data:any): Observable<ResponseI> {
    return this.http.post<ResponseI>(urlBase + "/create", data);
  }

  actualizarVehiculo(data:any): Observable<ResponseI> {
    return this.http.put<ResponseI>(urlBase + "/update", data);
  }

  eliminarVehiculo(data:number): Observable<ResponseI> {
    return this.http.get<ResponseI>(urlBase + "/delete/" + data);
  }
}
