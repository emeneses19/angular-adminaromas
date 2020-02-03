import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

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

  constructor(
    private router: Router,
    private activateroute: ActivatedRoute,
    private usuarioService: UsuarioService
  ) { }

  updateUsuario(){
    const params = this.activateroute.snapshot.params;
    this.usuarioService.putUsuario(params.id,this.usuario)
    .subscribe(
      res => { 
        console.log(res);
        this.router.navigate(['/usuario']);
      },
      err => console.error(err)
    )
  }
  lista(){
    this.router.navigate(['/usuarios']);
  }

  ngOnInit() {
    const params = this.activateroute.snapshot.params;
    if (params.id) {
      this.usuarioService.getUsuario(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.usuario = res;
          },
          err => console.log(err)
        )
    }
  }

}
