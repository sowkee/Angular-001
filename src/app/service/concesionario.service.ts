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
    return this.http.get<ResponseI>(urlBase + "/all")
  }
}
