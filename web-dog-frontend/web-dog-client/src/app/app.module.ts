import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './service/user.service';
import { CreateUserComponent } from './components/create-user-page/create-user/create-user.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { ProfileDetailsComponent } from './components/create-user-page/create-user/profile-details/profile-details.component';
import { AvatarCreationComponent } from './components/create-user-page/create-user/avatar-creation/avatar-creation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CreateUserComponent,
    ProfileDetailsComponent,
    AvatarCreationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
