import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  URI_API = 'http://localhost:666/usuario';

  constructor(private http:HttpClient ) { }

  getUsuarios(){
    return this.http.get(this.URI_API);
  }
  getUsuario( id: string){
    return this.http.get(`${this.URI_API}/${id}`);
  }
  postUsuario(usuario: Usuario){
    return this.http.post(`${this.URI_API}/create`, usuario);
  }
  putUsuario(id: string, updateusuario: Usuario): Observable<Usuario>{
    return this.http.put(`${this.URI_API}/update/${id}`, updateusuario);

  }
  deleteUsuario(id: string){
    return this.http.delete(`${this.URI_API}/${id}`)
  }
}
