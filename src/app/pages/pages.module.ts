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
import { EditArticleComponent } from './edit-article/edit-article.component';
import { ArticlesComponent } from './articles/articles.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    CreateArticleComponent,
    ProfileComponent,
    UsersComponent,
    SingleArticleComponent,
    EditArticleComponent,
    ArticlesComponent    
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    RecaptchaModule,
    CoreModule,
    SharedModule   
  ],
  exports: [
    LoginComponent,
    RegisterComponent    
  ]
})
export class PagesModule { }
