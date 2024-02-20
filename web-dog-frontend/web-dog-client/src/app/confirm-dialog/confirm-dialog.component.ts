import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../service/user.service';
import TextConstants from '../constants/text-constants';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent {

  text: string = TextConstants.DELETE_CONFIRM_MESSAGE + ` ${this.data.user.username}!`;

  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { user: any },
    private userService: UserService, private snackBar: MatSnackBar) {
  }

  confirmEvent() {
    this.userService.deleteUser(this.data.user).subscribe();
    this.dialogRef.close();
    this.snackBar.open(`User ${this.data.user.username} successfully deleted...`, "X", { duration: 3000, horizontalPosition: 'right' });
  }

  cancelEvent() {
    this.dialogRef.close();
  }
}
