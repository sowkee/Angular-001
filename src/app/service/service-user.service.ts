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

  getAllUsers(){
    return this.http.get<any>(urlBase+"/all");
  }
}
