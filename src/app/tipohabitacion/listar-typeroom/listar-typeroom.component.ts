import { Component, OnInit } from '@angular/core';
import { TyperoomService } from 'src/app/services/typeroom.service';

@Component({
  selector: 'app-listar-typeroom',
  templateUrl: './listar-typeroom.component.html',
  styleUrls: ['./listar-typeroom.component.css']
})
export class ListarTyperoomComponent implements OnInit {
  typeroom:any= [];
  constructor(private typeroomService:TyperoomService) { }
  getTipeRoom() {
    this.typeroomService.getTyperooms()
      .subscribe(
        res => {
          this.typeroom = res;
        },
        err => console.error(err)
      );
  }
  deleteTipeRoom(id: string) {
    this.typeroomService.deleteTyperoom(id)
      .subscribe(
        res => {
          console.log(res);
          this.getTipeRoom();
        },
        err => console.error(err)
      )
  }
  ngOnInit() {
    this.getTipeRoom();
  }

}
