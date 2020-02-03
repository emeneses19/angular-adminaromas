import { Component, OnInit, Input } from '@angular/core';
import { TyperoomService } from '../../services/typeroom.service';
// import { NgForm } from '@angular/forms';
import { Typeroom } from 'src/app/models/typeroom';

// declare var M: any;

@Component({
  selector: 'app-typeroom',
  templateUrl: './typeroom.component.html',
  styleUrls: ['./typeroom.component.css'],
  providers: [TyperoomService]
})
export class TyperoomComponent implements OnInit {

  tiperoom:Typeroom={
    id: 0,
    name: '',
    description: ''
  }
  constructor(private typeroomService: TyperoomService) { }

  ngOnInit() {
  }
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
  limpiar(){
    this.tiperoom.name='';
    this.tiperoom.description='';
  }

    
    

  // addTyperoom(form: NgForm){
  //   // console.log(form.value);
  //   this.typeroomService.postTyperoom(form.value)
  //   .subscribe(res => {
  //     console.log(res);
  //   });
  // }

  // resetForm(form?: NgForm){
  //   if(form){
  //     form.reset();
  //     this.typeroomService.selectedTyperoom = new Typeroom();
  //   }
  // }

}
