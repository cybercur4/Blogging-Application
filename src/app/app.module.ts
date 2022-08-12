import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { BlogComponent } from './blog/blog.component';
import { UserRegistrationService } from './user-registration.service';
import { FormsModule } from '@angular/forms';
import { PostblogComponent } from './postblog/postblog.component';
import { PostBlogService } from './post-blog.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    AboutComponent,
    ContactComponent,
    RegisterComponent,
    BlogComponent,
    PostblogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [UserRegistrationService,PostBlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
