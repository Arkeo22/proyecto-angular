import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './componentes/auth/registro/registro.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from './servicios/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './componentes/auth/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { MyNavbarComponent } from './componentes/my-navbar/my-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent,
    MyNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
