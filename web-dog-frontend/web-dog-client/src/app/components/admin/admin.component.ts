import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/confirm-dialog/confirm-dialog.component';
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

}
