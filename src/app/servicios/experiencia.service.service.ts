import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaServiceService {
  url = 'https://portfolio-backend-wjb2.onrender.com/experiencia/'

  constructor(private httpClient:HttpClient) { }

   //ver todas
   public listarExperiencias(): Observable<Experiencia[]> {
    return this.httpClient.get<Experiencia[]>(this.url + 'ver');
  }

  //ver una
  public findExperiencia(id: number): Observable<Experiencia> {
    return this.httpClient.get<Experiencia>(this.url + `find/${id}`);
  }

  //crear
  public crearExperiencia(experiencia: Experiencia): Observable<any> {
    return this.httpClient.post<Experiencia>(this.url + 'new', experiencia);
  }

  //editar
  public modificarExperiencia(id:number, experiencia: Experiencia): Observable<any> {
    return this.httpClient.put<any>(this.url + `update/${id}`, experiencia);
  }

  //eliminar
  public borrarExperiencia(id: number): Observable<Experiencia> {
    return this.httpClient.delete<Experiencia>(this.url + `delete/` + id);
  }

}
