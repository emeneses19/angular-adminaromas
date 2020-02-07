import { Component, OnInit } from '@angular/core';
import { TyperoomService } from 'src/app/services/typeroom.service';
import { Room } from '../../models/room';
import { RoomService } from '../../services/room.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createroom',
  templateUrl: './createroom.component.html',
  styleUrls: ['./createroom.component.css']
})
export class CreateroomComponent implements OnInit {

  typeroom:any= [];
  room: Room={
    id: 0,
    numberRoom: '',
    priceNeight: 0,
    description: '',
    state: true,
    imgRoom: '',
    typeRoomId: this.typeroom
  }
  constructor(private typeroomService:TyperoomService, 
              private roomService: RoomService,
              private router: Router) { }

  getTipeRoom() {
    this.typeroomService.getTyperooms()
      .subscribe(
        res => {
          this.typeroom = res;
        },
        err => console.error(err)
      );
  }
  limpiar(){
    this.room.numberRoom = '';
    this.room.priceNeight = 0;
    this.room.description = '';
    this.room.imgRoom = '';
    this.room.typeRoomId = 0;
  }

  saveRoom() {
    delete this.room.id;
    this.roomService.postRoom(this.room)
      .subscribe(
        res => {
          console.log(res);
          this.limpiar();
          // M.toast({html: 'Se guardó el tipo d ehabitacion!'})
        },
        err =>{
          console.error(err);
          // M.toast({html: 'No se guardó el tipo habitacion!'})
        } 
      )
  }

  lista(){
    this.router.navigate(['/habitaciones']);
  }


  ngOnInit() {
    this.getTipeRoom();
  }

}
