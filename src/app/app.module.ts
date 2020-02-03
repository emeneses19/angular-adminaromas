import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//importando lo que se necesita

import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpanelComponent } from './components/mainpanel/mainpanel.component';
import { UserComponent } from './components/user/user.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TyperoomComponent } from './components/typeroom/typeroom.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { from } from 'rxjs';
import { ListtyperromComponent } from './components/listtyperrom/listtyperrom.component';
import { CreateTyperoomComponent } from './tipohabitacion/create-typeroom/create-typeroom.component';
import { ListarTyperoomComponent } from './tipohabitacion/listar-typeroom/listar-typeroom.component';
import { UpdateTyperoomComponent } from './tipohabitacion/update-typeroom/update-typeroom.component';
import { CreateuserComponent } from './user/createuser/createuser.component';
import { ListuserComponent } from './user/listuser/listuser.component';
import { UpdateuserComponent } from './user/updateuser/updateuser.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpanelComponent,
    UserComponent,
    HeaderComponent,
    FooterComponent,
    TyperoomComponent,
    ReservationComponent,
    ListtyperromComponent,
    CreateTyperoomComponent,
    ListarTyperoomComponent,
    UpdateTyperoomComponent,
    CreateuserComponent,
    ListuserComponent,
    UpdateuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
