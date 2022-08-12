import { BlogComponent } from './blog/blog.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { PostblogComponent } from './postblog/postblog.component';

const routes: Routes = [

  {
  path:'login',
  component: LoginComponent
  },
  {
    path:'',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'contact',
    component: ContactComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'blog',
    component: BlogComponent
  },
  {
    path:'postblog',
    component: PostblogComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
