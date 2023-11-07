import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-avatar-image',
  templateUrl: './avatar-image.component.html',
  styleUrls: ['./avatar-image.component.css']
})
export class AvatarImageComponent {

  currentUserId!: number;

  constructor(public dialogRef: MatDialogRef<AvatarImageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { image: any }, private userService: UserService
    , private snackBar: MatSnackBar) {
    this.userService.currentUserId$.subscribe((id) => {
      this.currentUserId = id;
    });
  }

  save(imageUrl: string) {
    this.userService.setAvatar(this.currentUserId, imageUrl).subscribe();
    this.dialogRef.close();
    this.snackBar.open("Avatar saved...", "X", { duration: 3000, horizontalPosition: 'right' });
    this.userService.setIsAvatarSaved(true);
  }
}
