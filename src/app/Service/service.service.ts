import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Socio } from '../Modelo/Socio';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/v0/api/socios';

  getSocios(){
    return this.http.get<{socios: Socio[]}>(this.Url).pipe(map(respuesta => respuesta.socios));
  }

  createSocio(socio:Socio){
    return this.http.post<Socio>(this.Url,socio);
  }

  getSocioId(id:number){
    return this.http.get<Socio>(this.Url+"/"+id);
  }

  updateSocio(socio:Socio){
    return this.http.put<Socio>(this.Url,socio);
  }

  deleteSocio(socio: Socio){
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      body: socio
    };
    return this.http.delete<Socio>(this.Url, options);
  }

}
