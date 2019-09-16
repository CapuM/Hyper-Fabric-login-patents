import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';

import {routing} from './app-routing.module'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationService, UserService } from './_services';
import { AuthGuard } from './_guards';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    routing
    
  ],
  providers: [AuthenticationService,UserService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
