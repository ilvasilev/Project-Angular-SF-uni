import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/User/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = [];

  constructor(private _auth: AuthService) { }

  ngOnInit(): void {
    this._auth.getUsers()
    .subscribe(
      res => this.users = res,
      err => console.log(err)
    )
  }
}
