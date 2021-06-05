import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, AbstractControl, FormBuilder, FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { ConfirmedValidator, dniValido, telefonoValido } from 'src/app/validators/validaciones';


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
    passwordValidate: new FormControl("", [Validators.required])
  }, {
    validator: this.passwordMatchValidator
  })


  constructor() { }

  ngOnInit(): void {
  }

  passwordMatchValidator(c: AbstractControl): ValidatorFn {
    return (control: AbstractControl):{[key:string]:any} | null => {
      return control.get("password") == control.get("passwordValidate") ? null : {control: "Las contraseñas no coinciden"}
    }
  } 

  evaluaForm(): void{
    console.log ("Evaluando formulario")
    console.log(this.formRegistro.getRawValue())
    if (this.formRegistro.valid && ) console.log ("El formulario es correcto")
    else console.log("Lo que has introducido no vale ná")
  }
}
