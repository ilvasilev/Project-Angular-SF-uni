import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { PagesModule } from './pages/pages.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CreateArticleComponent } from './pages/create-article/create-article.component';
import { AuthService } from './User/auth.service';
import { AuthGuard } from './User/auth.guard';
import { TokenInterceptorService } from './User/token-interceptor.service'
import { ArticlesService } from './Articles/articles.service';
import { UsersComponent } from './pages/users/users.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ShortenerPipe } from './shortener.pipe';
import { SingleArticleComponent } from './pages/single-article/single-article.component';
import { EditArticleComponent } from './pages/edit-article/edit-article.component';


const appRoutes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent },
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'create-article', component: CreateArticleComponent, canActivate: [AuthGuard]},
  {path: 'users', component: UsersComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'single-article/:id', component: SingleArticleComponent},
  {path: 'edit-article/:id', component: EditArticleComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShortenerPipe   
  ],
  imports: [
    BrowserModule,
    CoreModule,
    PagesModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    ArticlesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
