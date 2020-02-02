import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TyperoomComponent } from './components/typeroom/typeroom.component';
import { ReservationComponent } from './components/reservation/reservation.component';


const routes: Routes = [
  {path: 'inicio', component:ReservationComponent },
  {path: 'tipohabitaciones', component: TyperoomComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'inicio'}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
