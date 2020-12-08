import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { PagesModule } from './pages/pages.module';
import { HttpClientModule } from '@angular/common/http';
import { CreateArticleComponent } from './pages/create-article/create-article.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

const appRoutes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent },
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'create-article', component: CreateArticleComponent, canActivate: [AuthGuard]}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent    
  ],
  imports: [
    BrowserModule,
    CoreModule,
    PagesModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule    
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
