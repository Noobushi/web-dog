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
import { MatStepperModule } from '@angular/material/stepper';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PetDetailsComponent } from './components/create-user-page/create-user/pet-details/pet-details.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { AvatarImageComponent } from './components/avatar-image/avatar-image.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { AdminComponent } from './components/admin/admin.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { EditUserComponent } from './edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CreateUserComponent,
    ProfileDetailsComponent,
    AvatarCreationComponent,
    PetDetailsComponent,
    AvatarImageComponent,
    AdminComponent,
    ConfirmDialogComponent,
    EditUserComponent
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
    MatTabsModule,
    MatStepperModule,
    MatSnackBarModule,
    MatGridListModule,
    MatDialogModule,
    MatChipsModule,
    MatTableModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
