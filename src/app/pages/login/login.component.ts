import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../User/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  errorMessage = '';

  constructor(
    private _auth: AuthService,
    private _router: Router
    ) { }

  ngOnInit(): void {
  }  

  onSubmit(form: NgForm) {
    this.username = form.value.username;
    this.password = form.value.password;
    
    this._auth.loginUser(this.username, this.password)
    .subscribe(
      res => {
        const authToken = res.headers.get('Authorization');
        const username = res.body.username;
        const id = res.body._id
        console.log('here')        
        localStorage.setItem('token', authToken);
        localStorage.setItem('username', username);
        localStorage.setItem('id', id);
        this._router.navigate(['/']);
      },
      err => {
        this.errorMessage = `Something went wrong, please try again!(${err.statusText})`;        
      }
      )

    form.resetForm();
  }

}
