import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../User/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username = '';
  password = '';
  rePassword = '';
  token = '';
  

  constructor(
    private _auth: AuthService,
    private _router: Router
    ) {}

  ngOnInit(): void {
  }

  public resolved(captchaResponse: string) {
    this.token = captchaResponse;
  }

  public onError(errorDetails: any[]) {
    console.log(`reCAPTCHA error encountered; details:`, errorDetails);
  }

  onSubmit(form: NgForm) {
    this.username = form.value.username;
    this.password = form.value.password;
    this.rePassword = form.value.rePassword;    
    
    this._auth.registerUser(this.username, this.password, this.token)
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
      err => console.log(err)
    )

    form.resetForm();
  }
}
