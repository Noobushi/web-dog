import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-avatar-image',
  templateUrl: './avatar-image.component.html',
  styleUrls: ['./avatar-image.component.css']
})
export class AvatarImageComponent {

  currentUserId!: number;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { image: any }, private userService: UserService) {
    this.userService.currentUserId$.subscribe((id) => {
      this.currentUserId = id;
    });
  }

  save(imageUrl: string) {
    this.userService.setAvatar(this.currentUserId, imageUrl).subscribe();
  }
}
