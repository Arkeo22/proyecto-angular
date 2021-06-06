import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './componentes/auth/registro/registro.component';
import { LoginComponent } from './componentes/auth/login/login.component';

const routes: Routes = [
  { path: "", component: RegistroComponent, pathMatch: "full"},
  { path: "register", component: RegistroComponent, pathMatch: "full"},
  { path: "login", component: LoginComponent, pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
