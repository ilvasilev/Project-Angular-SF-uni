import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './pages/users/users.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PublicationsComponent } from './pages/publications/publications.component';
import { UserService } from './user.service';
import { ArticlesService } from './articles.service';
import { HomeComponent } from './home/home.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,           
    UsersComponent,
    LoginComponent,
    RegisterComponent,
    PublicationsComponent,    
    HomeComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,    
  ],
  providers: [
    UserService,
    ArticlesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
