import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/clases/user';
import { AdminService } from 'src/app/servicios/admin-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  users: User[] = []
  constructor(private adminService: AdminService, private router: Router ) {
    if (!this.adminService.isAdmin()){
      this.router.navigateByUrl("")
    }

    this.adminService.obtenerUsers().subscribe(
      respuesta => {
        console.log(respuesta);
        this.users = respuesta;
      }
    )
   }

  ngOnInit(): void {
  }

  

}
