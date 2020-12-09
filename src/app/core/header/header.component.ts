import { Component, NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../User/auth.service'
import { AuthGuard } from '../../User/auth.guard'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  

  constructor(public _authService: AuthService) { }

  ngOnInit(): void {
  
  }

}
