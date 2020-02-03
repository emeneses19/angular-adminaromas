import { Component, OnInit } from '@angular/core';
import {} from 'src/app/services/usuario.service'
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
  usuario:any= [];

  constructor(private usuarioService: UsuarioService) { }

  getUsuario() {
    this.usuarioService.getUsuarios()
      .subscribe(
        res => {
          this.usuario = res;
        },
        err => console.error(err)
      );
  }
  deleteUsuario(id: string) {
    this.usuarioService.deleteUsuario(id)
      .subscribe(
        res => {
          console.log(res);
          this.getUsuario();
        },
        err => console.error(err)
      )
  }

  ngOnInit() {
    this.getUsuario();
  }

}
