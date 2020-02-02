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

@NgModule({
  declarations: [
    AppComponent,
    MainpanelComponent,
    UserComponent,
    HeaderComponent,
    FooterComponent,
    TyperoomComponent,
    ReservationComponent
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
