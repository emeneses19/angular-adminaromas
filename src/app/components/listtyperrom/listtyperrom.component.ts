import { Component, OnInit } from '@angular/core';
import { TyperoomService } from '../../services/typeroom.service';

@Component({
  selector: 'app-listtyperrom',
  templateUrl: './listtyperrom.component.html',
  styleUrls: ['./listtyperrom.component.css']
})
export class ListtyperromComponent implements OnInit {
  typeroom: any=[];


  constructor(private typeroomService: TyperoomService) { }

  ngOnInit() {
    this.getTyperoom();
  }
  getTyperoom(){
    this.typeroomService.getTyperooms()
    .subscribe(
      res => {
        this.typeroom = res;
      },
      err =>{
        console.log(err);
      }
    )
    
  }
  deleteTyperoom(id: string){
    this.typeroomService.deleteTyperoom(id)
    .subscribe(
      res=>{
        console.log(res);
        this.getTyperoom();
      },
      err =>{
        console.log(err);
      }
    )

  }
  

}
