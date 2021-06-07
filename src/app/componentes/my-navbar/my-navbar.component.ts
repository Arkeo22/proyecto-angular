import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/servicios/user.service';
import { faHome, faUser, faUserShield, faCamera } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-my-navbar',
  templateUrl: './my-navbar.component.html',
  styleUrls: ['./my-navbar.component.scss']
})
export class MyNavbarComponent implements OnInit {

  faHome = faHome
  faUser = faUser
  faUserShield = faUserShield

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  isLogged(): boolean {
    return this.userService.isLogged();
  }

  signOut(): void {
    this.userService.logOut();
    this.router.navigateByUrl("/login");
  }
}
