import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/models/room';
import { TyperoomService } from 'src/app/services/typeroom.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-updateroom',
  templateUrl: './updateroom.component.html',
  styleUrls: ['./updateroom.component.css']
})
export class UpdateroomComponent implements OnInit {
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

  constructor(
    private router: Router,
    private activateroute: ActivatedRoute,
    private roomService: RoomService,
    private typeroomService: TyperoomService) { }

    getTipeRoom() {
      this.typeroomService.getTyperooms()
        .subscribe(
          res => {
            this.typeroom = res;
          },
          err => console.error(err)
        );
    }


    updateRoom(){
      const params = this.activateroute.snapshot.params;
      this.roomService.putRoom(params.id, this.room)
      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['/habitaciones']);
        },
        err => console.error(err)
      )
    }

  ngOnInit() {

    const params = this.activateroute.snapshot.params;
    if (params.id) {
      this.roomService.getRoom(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.room = res;
          },
          err => console.log(err)
        )
    }
    this.getTipeRoom();

  }

}
