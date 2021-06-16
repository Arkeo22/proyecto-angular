import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/servicios/user.service';
import { faHome, faUser, faUserShield, faUsers, } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { AdminService } from 'src/app/servicios/admin-service.service';

@Component({
  selector: 'app-my-navbar',
  templateUrl: './my-navbar.component.html',
  styleUrls: ['./my-navbar.component.scss']
})
export class MyNavbarComponent implements OnInit {
  
  faSignOutAlt = faSignOutAlt
  faHome = faHome
  faUser = faUser
  faUsers = faUsers
  faUserShield = faUserShield
  public isCollapsed = false;

  constructor(private userService: UserService, private adminService: AdminService,private router: Router) { }

  ngOnInit(): void {
  }

  isLogged(): boolean {
    return this.userService.isLogged();
  }

  signOut(): void {
    this.userService.logOut();
    this.router.navigateByUrl("/login");
  }

  isAdmin(): boolean {
    return this.adminService.isAdmin();
  }
}
