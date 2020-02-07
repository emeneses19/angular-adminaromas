import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Typeroom } from 'src/app/models/typeroom';
import { TyperoomService } from 'src/app/services/typeroom.service';

@Component({
  selector: 'app-update-typeroom',
  templateUrl: './update-typeroom.component.html',
  styleUrls: ['./update-typeroom.component.css']
})
export class UpdateTyperoomComponent implements OnInit {
  tipohabitacion : Typeroom={
    id: 0,
    name: '',
    description: ''
  }
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private typeroomService: TyperoomService
    ) { }
    actualizartype() {
    const params = this.activatedRoute.snapshot.params;
    this.typeroomService.putTyperoom(params.id,this.tipohabitacion)
      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['/tipohabitaciones']);
        },
        err => console.error(err)
      )
  }
  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.typeroomService.getTyperoom(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.tipohabitacion = res;
          },
          err => console.log(err)
        )
    }
  }
}
