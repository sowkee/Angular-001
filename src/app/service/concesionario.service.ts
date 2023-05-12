import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const urlBase = "http://localhost:8080/concesionarios"

@Injectable({
  providedIn: 'root'
})
export class ConcesionarioService {

  constructor(private http: HttpClient) { }

  getAllConcesionario() {
    return this.http.get<any>(urlBase + "/all")
  }
}
