import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/clases/user';
import { UserService } from 'src/app/servicios/user.service';
import { faCamera, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  nombre = ''
  apellidos = ''
  email = ''
  telefono = ''
  dni = ''
  faCamera = faCamera
  faEdit = faEdit

  constructor(private userService: UserService, private router: Router) {
    this.cargarPerfil();
  }

  private cargarPerfil(): void {
    this.userService.obtenerPerfil().subscribe(
      respuesta => {
          this.nombre = respuesta["nombre"]
          this.apellidos = respuesta["apellidos"]
          this.email = respuesta["email"]
          this.telefono = respuesta["telefono"]
          this.dni = respuesta["dni"]
      }
    )
  }

  ngOnInit(): void {
  }

}
