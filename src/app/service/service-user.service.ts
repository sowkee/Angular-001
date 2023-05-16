import { ResponseI} from '../model/response-i';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const urlBase = "http://localhost:8080/usuarios";

@Injectable({
  providedIn: 'root'
})

export class ServiceUserService {

  constructor(private http:HttpClient) { }

  getAllUsers(): Observable<ResponseI>{
    return this.http.get<ResponseI>(urlBase + "/all");
  }

  crearUsuario(data:any): Observable<ResponseI> {
    return this.http.post<ResponseI>(urlBase + "/create", data);
  }

  actualizarUsuario(data:any): Observable<ResponseI> {
    return this.http.put<ResponseI>(urlBase + "/update", data);
  }

  eliminarUsuario(data:number): Observable<ResponseI> {
    return this.http.delete<ResponseI>(urlBase + "/delete/" + data);
  }
  
}
