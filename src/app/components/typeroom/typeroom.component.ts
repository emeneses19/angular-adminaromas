import { Component, OnInit } from '@angular/core';
import { TyperoomService } from '../../services/typeroom.service';
import { NgForm } from '@angular/forms';
import { Typeroom } from 'src/app/models/typeroom';

@Component({
  selector: 'app-typeroom',
  templateUrl: './typeroom.component.html',
  styleUrls: ['./typeroom.component.css'],
  providers: [TyperoomService]
})
export class TyperoomComponent implements OnInit {

  constructor(private typeroomService: TyperoomService) { }

  ngOnInit() {
  }

  addTyperoom(form: NgForm){
    // console.log(form.value);
    this.typeroomService.postTyperoom(form.value)
    .subscribe(res => {
      console.log(res);
    });
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.typeroomService.selectedTyperoom = new Typeroom();
    }
  }

}
