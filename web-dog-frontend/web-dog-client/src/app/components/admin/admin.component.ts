import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { empty } from 'rxjs';
import { ConfirmDialogComponent } from 'src/app/confirm-dialog/confirm-dialog.component';
import ImageConstants from 'src/app/constants/image-constants';
import { EditUserComponent } from 'src/app/edit-user/edit-user.component';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

  dataSource: any;
  displayedColumns!: string[];
  image!: string;

  constructor(private userService: UserService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.loadUserData();
    this.displayedColumns = ['id', 'username', 'password', 'firstName', 'lastName', 'avatar', 'description', 'button'];
  }

  loadUserData() {
    this.userService.getAllUsers().subscribe((users) => {
      this.dataSource = users;
    });
  }

  deleteUser(dataSource: User) {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      height: '200px',
      width: '300px',
      data: { user: dataSource }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.loadUserData();
    });
  }

  editUser(dataSource: User) {
    let dialogRef = this.dialog.open(EditUserComponent, {
      height: '650px',
      width: '300px',
      data: { user: dataSource }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.loadUserData();
    });
  }

  checkAvatarImage(image: string): string {
    if (image == "" || image == null) {
      this.image = ImageConstants.DEFAULT_AVATAR_IMAGE;
    } else {
      this.image = image;
    }
    return this.image;
  }

}
