import { Component, OnInit } from '@angular/core';
import { TyperoomService } from '../../services/typeroom.service';
// import { NgForm } from '@angular/forms';
import { Typeroom } from 'src/app/models/typeroom';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-typeroom',
  templateUrl: './create-typeroom.component.html',
  styleUrls: ['./create-typeroom.component.css']
})
export class CreateTyperoomComponent implements OnInit {
  tiperoom:Typeroom={
    id: 0,
    name: '',
    description: ''
  }
  constructor(private typeroomService: TyperoomService,private router: Router) { }
  savetipe() {
    delete this.tiperoom.id;
    this.typeroomService.postTyperoom(this.tiperoom)
      .subscribe(
        res => {
          console.log(res);
          // M.toast({html: 'Se guardó el tipo d ehabitacion!'})
        },
        err =>{
          console.error(err);
          // M.toast({html: 'No se guardó el tipo habitacion!'})
        } 
      )
  }
  lista(){
    this.router.navigate(['/tipohabitaciones']);
  }
  limpiar(){
    this.tiperoom.name='';
    this.tiperoom.description='';
  }
  ngOnInit() {
  }

}
