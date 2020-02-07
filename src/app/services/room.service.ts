import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Room } from '../models/room';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  URI_API = 'http://localhost:666/habitacion';

  constructor(private http:HttpClient ) { }

  getRooms(){
    return this.http.get(this.URI_API);
  }
  getRoom( id: string){
    return this.http.get(`${this.URI_API}/${id}`);
  }
  postRoom(room: Room){
    return this.http.post(`${this.URI_API}/create`, room);
  }

  putRoom(id: string, updateroom: Room): Observable<Room>{
    return this.http.put(`${this.URI_API}/update/${id}`, updateroom);

  }
  deleteRoom(id: string){
    return this.http.delete(`${this.URI_API}/${id}`)
  }
}
