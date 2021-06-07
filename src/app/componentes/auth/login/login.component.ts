import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, AbstractControl, FormBuilder, FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/servicios/user.service';
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

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  submit(): void{
    this.userService.acceso(this.formLogin.value).subscribe(
      respuesta => {
        this.userService.guardarToken(respuesta)
        this.router.navigateByUrl("/profile")
      }

    )
  }
    

}
