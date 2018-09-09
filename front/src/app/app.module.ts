
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './componets/home/home.component';
import { SalvaUsuarioComponent } from './componets/salva-usuario/salva-usuario.component';

import { HttpModule } from '../../node_modules/@angular/http';
import { DetalhesComponent } from './componets/detalhes/detalhes.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SalvaUsuarioComponent,
    SalvaUsuarioComponent,
    DetalhesComponent,
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule ,
    HttpModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
