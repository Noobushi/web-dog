import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AvatarImageComponent } from 'src/app/components/avatar-image/avatar-image.component';
import ImageConstants from 'src/app/constants/image-constants';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-avatar-creation',
  templateUrl: './avatar-creation.component.html',
  styleUrls: ['./avatar-creation.component.css']
})
export class AvatarCreationComponent {

  @Output() tabSelected = new EventEmitter<number>();
  currentUserId!: number;

  avatarImageList: Array<{ id: number, url: string }> = ImageConstants.avatarImageList;

  constructor(private userService: UserService, public dialog: MatDialog) {
    this.userService.currentUserId$.subscribe((id) => {
      this.currentUserId = id;
    });
  }

  selectNextTab(index: number) {
    this.tabSelected.emit(index);
  }

  openDialog(imageId: number) {
    let clickedImage = this.avatarImageList.find(image => image.id === imageId);
    let dialogRef = this.dialog.open(AvatarImageComponent, {
      height: '700px',
      width: '900px',
      data: { image: clickedImage }
    });
  }
}
