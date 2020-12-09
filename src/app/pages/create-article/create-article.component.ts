import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../User/auth.service'

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {

  title = '';
  content = '';
  imageUrl = '';
  events = []
  
  constructor(private _authService: AuthService,
              private _router: Router) { }

  ngOnInit(): void {
    /*this._authService.verifyLogin()
    .subscribe(
      res => {
        if (!res.status) {
          this._router.navigate(['/login'])
        }
      },
      err => {
        console.log(err)        
      }
    )*/
  }  

  onSubmit(form: NgForm) {
    this.title = form.value.username;
    this.content = form.value.password;
    this.imageUrl = form.value.imageUrl;

    form.resetForm();
  }

}