import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class AcercadeServiceService {

  url = 'https://portfolio-backend-wjb2.onrender.com/persona'

  constructor(private httpClient:HttpClient) { }

     //ver todas
     public listarPersonas(): Observable<Persona[]> {
      return this.httpClient.get<Persona[]>(this.url + 'ver');
    }

    //ver una
    public findPersona(id: number): Observable<Persona> {
      return this.httpClient.get<Persona>(this.url + `find/${id}`);
    }

    //crear
    public crearPersona(persona: Persona): Observable<any> {
      return this.httpClient.post<Persona>(this.url + 'new', persona);
    }

    //editar
    public modificarPersona(id:number, persona: Persona): Observable<any> {
      return this.httpClient.put<any>(this.url + `update/${id}`, persona);
    }

    //eliminar
    public borrarPersona(id: number): Observable<Persona> {
      return this.httpClient.delete<Persona>(this.url + `delete/` + id);
    }

}
