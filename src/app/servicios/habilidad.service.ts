import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../model/habilidad';

@Injectable({
  providedIn: 'root',
})
export class HabilidadService {

  url = 'http://localhost:8080/habilidades/'

  constructor(private httpClient: HttpClient) {}

  //ver todas
  public listarHabilidad(): Observable<Habilidad[]> {
    return this.httpClient.get<Habilidad[]>(this.url + 'ver');
  }

  //ver una
  public findHabilidad(id: number): Observable<Habilidad> {
    return this.httpClient.get<Habilidad>(this.url + `find/${id}`);
  }

  //crear
  public crearHabilidad(habilidad: Habilidad): Observable<any> {
    return this.httpClient.post<Habilidad>(this.url + 'new', habilidad);
  }

  //editar
  public modificarHabilidad(id:number, habilidad: Habilidad): Observable<any> {
    return this.httpClient.put<any>(this.url + `update/${id}`, habilidad);
  }

  //eliminar
  public borrarHabilidad(id: number): Observable<Habilidad> {
    return this.httpClient.delete<Habilidad>(this.url + `delete/` + id);
  }

}
