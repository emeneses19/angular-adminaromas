import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  usuario : Usuario={
    id: 0,
    names: '',
    surnames: '',
    dni: '',
    role: '',
    email: '',
    password: '',
    phone: ''
  }

  constructor(private usuarioservice: UsuarioService,private router: Router) { }

  limpiar(){
    this.usuario.names='';
    this.usuario.surnames='';
    this.usuario.dni='';
    this.usuario.role='';
    this.usuario.email='';
    this.usuario.password='';
    this.usuario.phone='';
  }

  saveUsuario() {
    delete this.usuario.id;
    this.usuarioservice.postUsuario(this.usuario)
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
    this.router.navigate(['/usuarios']);
  }


  ngOnInit() {
  }

}
