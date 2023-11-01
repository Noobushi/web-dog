import { Component, EventEmitter, Output } from '@angular/core';
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

  avatarImageList: Array<string> = ImageConstants.avatarImageList;

  constructor(private userService: UserService) {
    this.userService.currentUserId$.subscribe((id) => {
      this.currentUserId = id;
    });
  }

  selectNextTab(index: number) {
    this.tabSelected.emit(index);
  }
}
