import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './componentes/auth/registro/registro.component';
import { LoginComponent } from './componentes/auth/login/login.component';
import { ProfileComponent } from './componentes/profile/profile.component';
import { HomeComponent } from './componentes/home/home.component';
import { AdminComponent } from './componentes/admin/admin.component';
import { AboutusComponent } from './componentes/aboutus/aboutus.component';

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full"},
  { path: "register", component: RegistroComponent, pathMatch: "full"},
  { path: "login", component: LoginComponent, pathMatch: "full"},
  { path: "profile", component: ProfileComponent, pathMatch: "full"},
  { path: "home", component: HomeComponent, pathMatch: "full"},
  { path: "admin", component: AdminComponent, pathMatch: "full"},
  { path: "aboutus", component: AboutusComponent, pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
