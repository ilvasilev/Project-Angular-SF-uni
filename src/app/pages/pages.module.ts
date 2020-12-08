import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CreateArticleComponent } from './create-article/create-article.component';
import { RecaptchaModule } from 'ng-recaptcha';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    CreateArticleComponent    
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    RecaptchaModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent    
  ]
})
export class PagesModule { }
