import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/clases/user';
import { UserService } from 'src/app/servicios/user.service';
import { faCamera, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { dniValido, telefonoValido } from 'src/app/validators/validaciones';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  isEditing: boolean = false;
  perfil: User = {}
  formPerfil= this.fb.group({
    nombre:[''],
    apellidos:[''],
    password:['', [Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$')]],
    confirmPassword:[''],
    dni: ['', [Validators.required, dniValido()]],
    email:['', [Validators.required, Validators.email]],
    telefono:[undefined,[telefonoValido()]],
    imgSrc:['']
  })

  foto: File = {} as File
  faCamera = faCamera

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.cargarPerfil();
  }

  private cargarPerfil(): void {
    this.userService.obtenerPerfil().subscribe(
      respuesta => {
        console.log(respuesta)
        this.perfil = respuesta
        this.formPerfil.patchValue(respuesta)
      },
      error => Swal.fire('Ooops...', error.error.error, 'error')
    )
  }

  ngOnInit(): void {
  }

  editOrSave(): void {
    if (!this.isEditing){
      this.isEditing = true;
      return;
    }

    if (this.formPerfil.valid && (this.formPerfil.get("password")?.value == this.formPerfil.get("confirmPassword")?.value || this.formPerfil.get("password")?.value == "")){
      this.userService.editarPerfil(this.formPerfil.value).subscribe(
        respuesta => {
          console.log(respuesta)
          this.cargarPerfil();
          this.isEditing = false;
        },
        error => Swal.fire('Ooops...', error.error.error, 'error')
      )
    }
    else{
      console.log("Lo que has introducido no vale n??")
    }
  }

  deleteUser(): void{
    this.userService.eliminarUsuario().subscribe(
      respuesta => {
        console.log(respuesta)
        this.userService.logOut()
        this.router.navigateByUrl('/login')
      },
      error => Swal.fire('Ooops...', error.error.error, 'error')
    )
  }

  tengoFoto(evento: any): void{
    if(evento.target.files){
      this.foto = evento.target.files[0];
      this.subirFoto();
    }
  }

  subirFoto(): void{
    const formData = new FormData()
    formData.append('imagen', this.foto)
    this.userService.subirImagen(formData).subscribe(
      respuesta => {
        console.log(respuesta)
        this.cargarPerfil()
      },
      error => Swal.fire('Ooops...', error.error.error, 'error')
    )
  }

  getProfileImg(): string{
    console.log(this.formPerfil.get('imgSrc')?.value == null ? '../../../assets/imgs/peeposumito.png' : this.formPerfil.get('imgSrc')?.value)
    return this.formPerfil.get('imgSrc')?.value == null ? 'url(../../../assets/imgs/peeposumito.png)' : `url(${this.formPerfil.get('imgSrc')?.value})`;
  }
}
