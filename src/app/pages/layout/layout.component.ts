import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  constructor(private loginService:LoginService,private router:Router ){}

  logout(){
    this.loginService.logout()
    this.router.navigate(["/login"])
  }
}
