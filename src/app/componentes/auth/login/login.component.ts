import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, AbstractControl, FormBuilder, FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { ConfirmedValidator} from 'src/app/validators/validaciones';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup = new FormGroup({
    email: new FormControl ("", [Validators.required]),
    password: new FormControl ("", [Validators.required]) 
  })

  constructor() { }

  ngOnInit(): void {
  }

  evaluaForm(): void{
    console.log ("Evaluando formulario")
    console.log(this.formLogin.getRawValue())
    if (this.formLogin.valid) console.log ("El formulario es correcto")
    else console.log("Lo que has introducido no vale ná")
  }

}
