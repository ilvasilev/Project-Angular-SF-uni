import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/User/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user = null;

  constructor(private _auth: AuthService) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('id')
    this._auth.getUser(this.user)
    .subscribe(
      res =>{
        this.user = res;
        console.log(this.user)
      },
      err => console.log(err)
    )
  }

}
