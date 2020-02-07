import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-listroom',
  templateUrl: './listroom.component.html',
  styleUrls: ['./listroom.component.css']
})
export class ListroomComponent implements OnInit {
  room: any =[];

  constructor(private roomService: RoomService) { }
  getRoom(){
    this.roomService.getRooms()
    .subscribe(
      res =>{
        this.room = res;
      },
      err=>{
        console.log(err);
      }
    )
  }
  deleteRoom(id: string){
    this.roomService.deleteRoom(id)
    .subscribe(
      res => {
        console.log(res);
        this.getRoom();
      },
      err => console.error(err)
    )
  }

  ngOnInit() {
    this.getRoom();
  }

}
