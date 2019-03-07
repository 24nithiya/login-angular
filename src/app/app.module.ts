import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import{ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import{ MyRouteModule} from './app.routes';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import{ AuthenticateService} from'./authenticate.service';
import { HomeComponent } from './home/home.component';
import {TokeninterceptorsService} from'./tokeninterceptors.service';
import { RegComponent } from './reg/reg.component';
import { ContactComponent } from './contact/contact.component';
import { ContactlistComponent } from './contactlist/contactlist.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    RegComponent,
    ContactComponent,
    ContactlistComponent,
  
  
  ],
  imports: [
    BrowserModule,
    MyRouteModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthenticateService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass : TokeninterceptorsService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
