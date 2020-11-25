import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public userService: UserService) { }

   loginHandler(): void {
    this.userService.login()
   }

   logoutHandler(): void {
    this.userService.logout()
   }
}
