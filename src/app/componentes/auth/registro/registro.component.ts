import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, AbstractControl, FormBuilder, FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/servicios/user.service';
import { ConfirmedValidator, dniValido, telefonoValido } from 'src/app/validators/validaciones';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  formRegistro: FormGroup = new FormGroup({
    nombre: new FormControl("", [Validators.required, Validators.minLength(3)]),
    apellidos: new FormControl("", [Validators.required, Validators.minLength(3)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    dni: new FormControl("", [Validators.required, dniValido()]),
    telefono: new FormControl("", [Validators.required, telefonoValido()]),
    password: new FormControl("", [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$')]),
    passwordValidate: new FormControl("", [Validators.required]),
    aceptarTerminos: new FormControl(false, [Validators.requiredTrue])
  }, {
    //validator: this.passwordMatchValidator 
  })


  constructor(private userService: UserService, private router: Router) {
    if (this.userService.isLogged()){
      this.router.navigateByUrl("/profile")
    }
  }

  ngOnInit(): void {
  }

  submit(): void{
    if (this.formRegistro.valid && this.formRegistro.get("password")?.value == this.formRegistro.get("passwordValidate")?.value){
      this.userService.registrar(this.formRegistro.value).subscribe(
        respuesta =>{
          this.userService.guardarToken(respuesta)
          this.router.navigateByUrl('/profile')
        },
        error => Swal.fire('Ooops...', error.error.error, 'error')
      )
    }
    else{
      console.log("Lo que has introducido no vale ná")
    }
  }
}
