import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent {

  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { user: any },
    private userService: UserService) {
  }

  confirmEvent() {
    this.userService.deleteUser(this.data.user).subscribe();
    this.dialogRef.close();
  }

  cancelEvent() {
    this.dialogRef.close();
  }
}
