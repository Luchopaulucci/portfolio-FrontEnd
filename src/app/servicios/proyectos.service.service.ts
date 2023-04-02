import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../model/proyectos';

@Injectable({
  providedIn: 'root',
})
export class ProyectosServiceService {
  url = 'https://portfolio-backend-wjb2.onrender.com/proyectos/';

  constructor(private httpClient: HttpClient) {}

  //ver todas
  public listarProyectos(): Observable<Proyectos[]> {
    return this.httpClient.get<Proyectos[]>(this.url + 'ver');
  }

  //ver una
  public findProyectos(id: number): Observable<Proyectos> {
    return this.httpClient.get<Proyectos>(this.url + `find/${id}`);
  }

  //crear
  public crearProyectos(proyectos: Proyectos): Observable<any> {
    return this.httpClient.post<Proyectos>(this.url + 'new', proyectos);
  }

  //editar
  public modificarProyectos(id: number, proyectos: Proyectos): Observable<any> {
    return this.httpClient.put<any>(this.url + `update/${id}`, proyectos);
  }

  //eliminar
  public borrarProyectos(id: number): Observable<Proyectos> {
    return this.httpClient.delete<Proyectos>(this.url + `delete/` + id);
  }
}
