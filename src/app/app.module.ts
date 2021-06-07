import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './componentes/auth/registro/registro.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from './servicios/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './componentes/auth/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyNavbarComponent } from './componentes/my-navbar/my-navbar.component';
import { ProfileComponent } from './componentes/profile/profile.component';
import { EditProfileComponent } from './componentes/edit-profile/edit-profile.component';
import { EnviarTokenInterceptor } from './interceptors/enviar-token.interceptor';
import { HomeComponent } from './componentes/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent,
    MyNavbarComponent,
    ProfileComponent,
    EditProfileComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [],
  providers: [
    UserService,
    {provide: HTTP_INTERCEPTORS, useClass: EnviarTokenInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
