import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseI } from '../model/response-i';

const urlBase = "http://localhost:8080/concesionarios"

@Injectable({
  providedIn: 'root'
})
export class ConcesionarioService {

  constructor(private http: HttpClient) { }

  getAllConcesionario(): Observable<ResponseI> {
    return this.http.get<ResponseI>(urlBase + "/all");
  }

  crearConcesionario(data:any): Observable<ResponseI> {
    return this.http.post<ResponseI>(urlBase + "/create", data);
  }

  actualizarConcesionario(data:any): Observable<ResponseI> {
    return this.http.put<ResponseI>(urlBase + "/update", data);
  
  }

  eliminarConcesionario(data:number): Observable<ResponseI> {
    return this.http.delete<ResponseI>(urlBase + "/delete/" + data);
  }
}
