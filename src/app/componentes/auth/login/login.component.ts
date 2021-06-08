import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/servicios/user.service';

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

  constructor(private userService: UserService, private router: Router) {
    if (this.userService.isLogged()){
      this.router.navigateByUrl("/profile")
    }
  }

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
