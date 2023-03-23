import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root',
})
export class EducacionServiceService {

  url = 'http://localhost:8080/educacion/'

  constructor(private httpClient:HttpClient) {}

  //ver todas
  public listarEducacion(): Observable<Educacion[]> {
    return this.httpClient.get<Educacion[]>(this.url + 'ver');
  }

  //ver una
  public findEducacion(id: number): Observable<Educacion> {
    return this.httpClient.get<Educacion>(this.url + `find/${id}`);
  }

  //crear
  public crearEducacion(educacion: Educacion): Observable<any> {
    return this.httpClient.post<Educacion>(this.url + 'new', educacion);
  }

  //editar
  public modificarEducacion(id: number, educacion: Educacion): Observable<any> {
    return this.httpClient.put<any>(this.url + `update/${id}`, educacion);
  }

  //eliminar
  public borrarEducacion(id: number): Observable<Educacion> {
    return this.httpClient.delete<Educacion>(this.url + `delete/` + id);
  }

}
