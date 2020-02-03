import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { TyperoomComponent } from './components/typeroom/typeroom.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { ListtyperromComponent } from './components/listtyperrom/listtyperrom.component';
import { CreateTyperoomComponent } from './tipohabitacion/create-typeroom/create-typeroom.component';
import { UpdateTyperoomComponent } from './tipohabitacion/update-typeroom/update-typeroom.component';
import { ListarTyperoomComponent } from './tipohabitacion/listar-typeroom/listar-typeroom.component';
import { ListuserComponent } from './user/listuser/listuser.component';
import { CreateuserComponent } from './user/createuser/createuser.component';
import { UpdateuserComponent } from './user/updateuser/updateuser.component';


const routes: Routes = [
  {path: 'inicio', component:ReservationComponent },
  // {path: 'tipohabitaciones', component: TyperoomComponent},
  {
    path: 'tipohabitaciones',
    children: [
      {
        path: '',
        component: ListarTyperoomComponent
      },
      {
        path: 'create',
        component: CreateTyperoomComponent
      },
      {
        path: 'update/:id',
        component: UpdateTyperoomComponent
      }
    ]
  },
  {
    path: 'usuarios',
    children: [
      {
        path: '',
        component: ListuserComponent
      },
      {
        path: 'create',
        component: CreateuserComponent
      },
      {
        path: 'update/:id',
        component: UpdateuserComponent
      }
    ]
  },
  // {path: '**', pathMatch: 'full', redirectTo: 'inicio'},
  // {path: 'listartipohabitacion', component: ListtyperromComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
