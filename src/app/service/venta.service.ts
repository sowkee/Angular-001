import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseI } from '../model/response-i';
import { Observable } from 'rxjs';

const urlBase = "http://localhost:8080/ventas";

@Injectable({
  providedIn: 'root'
})
export class VentaService {



  constructor(private http:HttpClient) { }

  getAllVentas(): Observable<ResponseI> {
    return this.http.get<ResponseI>(urlBase + "/all")
  }

  crearVenta(data:any): Observable<ResponseI> {
    return this.http.post<ResponseI>(urlBase + "/create", data);
  }

  actualizarVenta(data:any): Observable<ResponseI> {
    return this.http.put<ResponseI>(urlBase + "/update", data);
  }

  eliminarVenta(data:number): Observable<ResponseI> {
    return this.http.delete<ResponseI>(urlBase + "/delete/" + data);
  }
}
