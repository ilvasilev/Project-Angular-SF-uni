import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CreateArticleComponent } from './create-article/create-article.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import { SingleArticleComponent } from './single-article/single-article.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    CreateArticleComponent,
    ProfileComponent,
    UsersComponent,
    SingleArticleComponent   
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    RecaptchaModule,
    CoreModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent    
  ]
})
export class PagesModule { }
