import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './componentes/auth/registro/registro.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from './servicios/user.service';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  exports: [],
  providers: [UserService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
