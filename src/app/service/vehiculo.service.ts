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
}
