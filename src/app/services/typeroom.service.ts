import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Typeroom } from '../models/typeroom';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TyperoomService {

  // selectedTyperoom: Typeroom;
  // typeroom: Typeroom[];
  URI_API = 'http://localhost:666/tipohabitacion';

  constructor( private http: HttpClient) { 
    // this.selectedTyperoom = new Typeroom();
  }

  getTyperooms(){
    return this.http.get(this.URI_API)
  }
  getTyperoom(id: string){
    return this.http.get(`${this.URI_API}/${id}`);
  }
  postTyperoom(typeroom: Typeroom){
    return this.http.post(`${this.URI_API}/create`, typeroom);
  }
  putTyperoom(id: string, updatedtyperoom: Typeroom): Observable<Typeroom> {
    return this.http.put(`${this.URI_API}/update/${id}`, updatedtyperoom);
  }
  // updateAdmin(id: string|number, updatedAdmin: Admin): Observable<Admin> {
  //   return this.http.put(`${this.apiUrl}/update/${id}`, updatedAdmin);
  // }
  // putTyperoom(typeroom: Typeroom){
  //   return this.http.put(`${this.URI_API}/update` + `/${typeroom.id}`, typeroom);
  // }
  deleteTyperoom(id: string){
    return this.http.delete(`${this.URI_API}/${id}`)
  }
}
